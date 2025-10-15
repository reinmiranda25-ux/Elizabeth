import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__background"></div>
      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title">
            Compassionate Care, Meaningful Living
          </h1>
          <p className="hero__subtitle">
            Providing a warm, supportive home environment for adults with intellectual
            and developmental disabilities in Florida
          </p>
          <div className="hero__actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Schedule a Tour
            </Button>
            <Button
              variant="white"
              size="large"
              onClick={() => navigate('/services')}
            >
              Learn More
            </Button>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>APD Licensed</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>2+ Years Experience</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>Professional Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
