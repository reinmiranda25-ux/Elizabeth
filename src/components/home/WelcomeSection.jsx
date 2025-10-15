import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../common/Section';
import Button from '../common/Button';
import './WelcomeSection.css';

const WelcomeSection = () => {
  const navigate = useNavigate();

  return (
    <Section background="white">
      <div className="welcome">
        <div className="welcome__content">
          <div className="welcome__text">
            <h2 className="welcome__title">Elizabeth Group Home Services LLC</h2>
            <p className="welcome__paragraph">
              We are experts at caring for people with intellectual and developmental disabilities.
            </p>
            <p className="welcome__paragraph">
              With over 2 years of experience, Elizabeth Group Home Services LLC is licensed by the Agency for
              Persons with Disabilities (APD) and dedicated to providing compassionate care and meaningful living
              for individuals in Florida.
            </p>
            <p className="welcome__paragraph">
              Our facilities feature comfortable living arrangements with professional support, creating a
              home environment where residents can thrive.
            </p>
            <div className="welcome__actions">
              <Button
                variant="primary"
                size="large"
                onClick={() => navigate('/about')}
              >
                Learn About Us
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() => navigate('/homes')}
              >
                See Our Homes
              </Button>
            </div>
          </div>

          <div className="welcome__image">
            <div className="welcome__image-placeholder">
              <span>Welcome Image</span>
              <p className="welcome__image-caption">
                Photo: Residents enjoying community activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WelcomeSection;
