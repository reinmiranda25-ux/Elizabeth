import React, { useCallback, useEffect, useRef, useState } from 'react';
import tour from './tour.json';
import './VirtualTour.css';

const PLAY_MS = 750; // auto-advance speed for "Play tour"
const HOLD_MS = 200; // stepping speed while holding the right side
const HOLD_DELAY_MS = 350;

const photoPath = (file) => `${process.env.PUBLIC_URL}/tour/photos/${file}`;

const slides = tour.flatMap((room, ri) =>
  room.photos.map((file, n) => ({ src: photoPath(file), room: ri, n }))
);
const firstOfRoom = tour.map((_, ri) => slides.findIndex((s) => s.room === ri));
const LAST = slides.length - 1;
const clamp = (i) => Math.max(0, Math.min(LAST, i));

const VirtualTour = () => {
  const [current, setCurrent] = useState(0);
  // The photo on screen and the one it is fading in over
  const [frames, setFrames] = useState({ shown: -1, prev: -1 });
  const [fast, setFast] = useState(false);
  const [playing, setPlaying] = useState(false);

  const currentRef = useRef(0);
  const imgRefs = useRef([]);
  const listRef = useRef(null);
  const roomRefs = useRef([]);
  const hold = useRef({ timeout: null, interval: null, active: false, dir: 1 });
  const touchX = useRef(null);

  const slide = slides[current];

  const go = useCallback((i) => setCurrent(clamp(i)), []);
  const step = useCallback((delta) => setCurrent((c) => clamp(c + delta)), []);

  const endHold = useCallback(() => {
    clearTimeout(hold.current.timeout);
    clearInterval(hold.current.interval);
    setFast(false);
  }, []);

  // Manual navigation always pauses autoplay
  const manual = (fn) => () => {
    setPlaying(false);
    fn();
  };

  // Load nearby photos, then swap only once the current one is decoded (no black flashes)
  useEffect(() => {
    currentRef.current = current;
    const load = (i) => {
      const img = imgRefs.current[i];
      if (img && !img.getAttribute('src')) img.src = slides[i].src;
    };
    for (let k = -2; k <= 8; k++) {
      if (current + k >= 0 && current + k <= LAST) load(current + k);
    }

    const img = imgRefs.current[current];
    const paint = () => {
      if (currentRef.current !== current) return;
      setFrames((f) => (f.shown === current ? f : { shown: current, prev: f.shown }));
    };
    if (img.complete && img.naturalWidth) paint();
    else img.decode().then(paint, paint);

    // Keep the active room visible in the strip without scrolling the page
    const list = listRef.current;
    const li = roomRefs.current[slides[current].room];
    if (list && li && (li.offsetLeft < list.scrollLeft || li.offsetLeft + li.offsetWidth > list.scrollLeft + list.clientWidth)) {
      list.scrollTo({ left: li.offsetLeft - list.clientWidth / 2 + li.offsetWidth / 2, behavior: 'smooth' });
    }

    if (current === LAST) setPlaying(false);
    // Stop a hold once it reaches the start or end of the tour
    if (hold.current.active && ((hold.current.dir > 0 && current === LAST) || (hold.current.dir < 0 && current === 0))) {
      endHold();
    }
  }, [current, endHold]);

  // Warm the first two photos of every room so room jumps are instant
  useEffect(() => {
    const t = setTimeout(() => {
      firstOfRoom.forEach((i) => {
        [i, i + 1].forEach((j) => {
          const img = imgRefs.current[j];
          if (img && j <= LAST && !img.getAttribute('src')) img.src = slides[j].src;
        });
      });
    }, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const t = setInterval(() => step(1), PLAY_MS);
    return () => clearInterval(t);
  }, [playing, step]);

  useEffect(() => endHold, [endHold]);

  const togglePlay = () => {
    if (playing) return setPlaying(false);
    if (current === LAST) go(0);
    setPlaying(true);
  };

  // Tap = one step; press and hold = keep walking (forward on the right, backward on the left)
  const holdProps = (delta) => ({
    onPointerDown: () => {
      setPlaying(false);
      hold.current.active = false;
      hold.current.dir = delta;
      hold.current.timeout = setTimeout(() => {
        hold.current.active = true;
        setFast(true);
        hold.current.interval = setInterval(() => step(delta), HOLD_MS);
      }, HOLD_DELAY_MS);
    },
    onPointerUp: endHold,
    onPointerLeave: endHold,
    onPointerCancel: endHold,
    onContextMenu: (e) => e.preventDefault(),
    onClick: () => {
      if (!hold.current.active) step(delta);
      hold.current.active = false;
    },
  });

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      manual(() => step(1))();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      manual(() => step(-1))();
    }
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      endHold();
      hold.current.active = true; // swallow the click that follows the swipe
      setPlaying(false);
      step(dx < 0 ? 1 : -1);
    }
    touchX.current = null;
  };

  const { shown, prev } = frames;
  const backdrop = shown >= 0 ? slides[shown].src : slides[0].src;

  return (
    <div className="virtual-tour" onKeyDown={onKeyDown}>
      <div className="virtual-tour__header">
        <span className="virtual-tour__eyebrow">Photo Tour</span>
        <h2 className="virtual-tour__title">Step Inside Our Home</h2>
        <p className="virtual-tour__subtitle">
          Tap the right side of the photo to step forward, or hold it down to keep walking. Tap the left
          side to go back, or pick a room below.
        </p>
      </div>

      <div
        className={`virtual-tour__stage${fast ? ' is-fast' : ''}`}
        role="region"
        aria-roledescription="photo tour"
        aria-label="Photo tour of Elizabeth Group Home. Use the left and right arrow keys to move through the photos."
        tabIndex={0}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="virtual-tour__backdrop" style={{ backgroundImage: `url("${backdrop}")` }} aria-hidden="true" />

        <div className="virtual-tour__frame">
          {slides.map((s, i) => (
            <img
              key={s.src}
              ref={(el) => {
                imgRefs.current[i] = el;
              }}
              alt={i === shown ? `${tour[s.room].room}, photo ${s.n + 1} of ${tour[s.room].photos.length}` : ''}
              aria-hidden={i === shown ? undefined : true}
              decoding="async"
              className={i === shown ? 'is-on' : i === prev ? 'is-prev' : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="virtual-tour__tap virtual-tour__tap--prev"
          tabIndex={-1}
          aria-hidden="true"
          {...holdProps(-1)}
        />
        <button
          type="button"
          className="virtual-tour__tap virtual-tour__tap--next"
          tabIndex={-1}
          aria-hidden="true"
          {...holdProps(1)}
        />

        <button
          type="button"
          className="virtual-tour__arrow virtual-tour__arrow--prev"
          {...holdProps(-1)}
          disabled={current === 0}
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          type="button"
          className="virtual-tour__arrow virtual-tour__arrow--next"
          {...holdProps(1)}
          disabled={current === LAST}
          aria-label="Next photo"
        >
          ›
        </button>

        <div className="virtual-tour__pill virtual-tour__label" aria-live="polite">
          <span className="virtual-tour__label-dot" aria-hidden="true" />
          {tour[slide.room].room}
        </div>

        <button
          type="button"
          className={`virtual-tour__pill virtual-tour__play${playing ? ' is-playing' : ''}`}
          onClick={togglePlay}
        >
          <span className="virtual-tour__play-icon" aria-hidden="true" />
          {playing ? 'Pause' : 'Play tour'}
        </button>

        <div className="virtual-tour__pill virtual-tour__count" aria-hidden="true">
          {current + 1} / {slides.length}
        </div>
      </div>

      <ol className="virtual-tour__timeline" ref={listRef}>
        {tour.map((room, ri) => {
          const fill = ri < slide.room ? 1 : ri > slide.room ? 0 : (slide.n + 1) / room.photos.length;
          const active = ri === slide.room;
          return (
            <li
              key={room.room}
              ref={(el) => {
                roomRefs.current[ri] = el;
              }}
            >
              <button
                type="button"
                className={`virtual-tour__room${active ? ' is-active' : ''}`}
                onClick={manual(() => go(firstOfRoom[ri]))}
                aria-current={active ? 'step' : undefined}
              >
                <span className="virtual-tour__bar" aria-hidden="true">
                  <span style={{ transform: `scaleX(${fill})` }} />
                </span>
                <span className="virtual-tour__room-name">{room.room}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default VirtualTour;
