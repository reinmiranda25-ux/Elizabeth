import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../common/Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/homes', label: 'Our Homes' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container">
        <div className="header__inner">
          {/* Logo */}
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <span className="header__logo-text">Elizabeth</span>
            <span className="header__logo-subtitle">Group Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone Number & CTA */}
          <div className="header__contact">
            <a href="tel:+17277482246" className="header__phone">
              <span className="header__phone-label">Call us today at</span>
              <span className="header__phone-number">(727) 748-2246</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="header__mobile-menu" aria-label="Mobile navigation">
            <ul className="header__mobile-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__mobile-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'header__mobile-link header__mobile-link--active' : 'header__mobile-link'
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="header__mobile-item header__mobile-item--cta">
                <Button variant="primary" size="large" fullWidth onClick={() => window.location.href = 'tel:+17277482246'}>
                  Call Us Now
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
