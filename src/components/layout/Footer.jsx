import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__section">
            <h3 className="footer__heading">Elizabeth Group Home Services LLC</h3>
            <p className="footer__description">
              Compassionate care and meaningful living for people with intellectual and developmental disabilities in Florida.
            </p>
            <div className="footer__contact">
              <p>
                <strong>Cellphone:</strong>{' '}
                <a href="tel:+17277482246" className="footer__link">
                  (727) 748-2246
                </a>
              </p>
              <p>
                <strong>Telephone:</strong>{' '}
                <a href="tel:+17272584090" className="footer__link">
                  (727) 258-4090
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:frencismiranda@gmail.com" className="footer__link">
                  frencismiranda@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/services" className="footer__link">Services</Link></li>
              <li><Link to="/homes" className="footer__link">Our Homes</Link></li>
              <li><Link to="/admissions" className="footer__link">Admissions</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list">
              <li>Personal Supports</li>
              <li>Respite (under 21)</li>
              <li>Life Skills Development 1 (Companion)</li>
              <li>Behavior Assistant Services</li>
              <li>Vocational Support & Workforce Preparation</li>
            </ul>
          </div>

          {/* Licensing & Hours */}
          <div className="footer__section">
            <h4 className="footer__heading">Information</h4>
            <p className="footer__license">
              <strong>Licensed by:</strong><br />
              Florida Agency for Persons with Disabilities (APD)
            </p>
            <p className="footer__hours">
              <strong>Office Hours:</strong><br />
              Monday - Friday: 9:00 AM - 5:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed<br />
              <em>24/7 Emergency Support Available</em>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Elizabeth Group Home Services LLC. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy" className="footer__link">Privacy Policy</Link>
            <span className="footer__divider">|</span>
            <Link to="/terms" className="footer__link">Terms of Service</Link>
            <span className="footer__divider">|</span>
            <Link to="/resident-privacy-rights" className="footer__link">Resident Privacy Rights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
