import React, { useRef, useState } from 'react';
import './VirtualTour.css';

// Start times (seconds) of each room in walkthrough.mp4
const rooms = [
  { title: 'Exterior', start: 0 },
  { title: 'Front Porch', start: 8.4 },
  { title: 'Hallway', start: 20.27 },
  { title: 'Kitchen & Dining', start: 33.13 },
  { title: 'Bedroom 1', start: 66.0 },
  { title: 'Bedroom 2', start: 87.5 },
  { title: 'Bedroom 3', start: 110.5 },
  { title: 'Bedroom 4', start: 135.8 },
  { title: 'Bathrooms', start: 164.57 },
];
const DURATION = 201.13;

const tourPath = (name) => `${process.env.PUBLIC_URL}/tour/${name}`;

const VirtualTour = () => {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);

  const activeIndex = rooms.reduce((acc, room, i) => (time >= room.start - 0.05 ? i : acc), 0);

  const play = () => {
    setStarted(true);
    videoRef.current.play();
  };

  const jumpTo = (index) => {
    const video = videoRef.current;
    video.currentTime = rooms[index].start + 0.05;
    setTime(rooms[index].start);
    if (video.paused) play();
  };

  return (
    <div className="virtual-tour">
      <div className="virtual-tour__header">
        <span className="virtual-tour__eyebrow">Virtual Walkthrough</span>
        <h2 className="virtual-tour__title">Step Inside Our Home</h2>
        <p className="virtual-tour__subtitle">
          Take a guided walkthrough of our Pinellas Park home, from the front porch to the bedrooms.
          Select a room below to jump straight to it.
        </p>
      </div>

      <div className="virtual-tour__stage">
        <video
          ref={videoRef}
          src={tourPath('walkthrough.mp4')}
          poster={tourPath('walkthrough-poster.jpg')}
          muted
          playsInline
          preload="metadata"
          controls={started}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onPlay={() => setStarted(true)}
          aria-label="Silent video walkthrough of Elizabeth Group Home"
        />

        {started && (
          <div className="virtual-tour__label" aria-live="polite">
            <span className="virtual-tour__label-dot" />
            {rooms[activeIndex].title}
          </div>
        )}

        {!started && (
          <button type="button" className="virtual-tour__play" onClick={play}>
            <span className="virtual-tour__play-icon" aria-hidden="true" />
            <span>Start the Tour</span>
          </button>
        )}
      </div>

      <ol className="virtual-tour__timeline">
        {rooms.map((room, i) => {
          const end = i + 1 < rooms.length ? rooms[i + 1].start : DURATION;
          const length = end - room.start;
          const filled = Math.min(1, Math.max(0, (time - room.start) / length));
          return (
            <li key={room.title}>
              <button
                type="button"
                className={`virtual-tour__room${i === activeIndex && started ? ' is-active' : ''}`}
                onClick={() => jumpTo(i)}
                aria-current={i === activeIndex && started ? 'step' : undefined}
              >
                <span className="virtual-tour__bar" aria-hidden="true">
                  <span style={{ transform: `scaleX(${filled})` }} />
                </span>
                <span className="virtual-tour__room-name">
                  <span className="virtual-tour__room-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {room.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default VirtualTour;
