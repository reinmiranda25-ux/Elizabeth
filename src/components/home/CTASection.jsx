import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../common/Section';
import Button from '../common/Button';
import './CTASection.css';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Section background="primary" spacing="large">
      <div className="cta">
        <div className="cta__content">
          <h2 className="cta__title">Ready to Learn More?</h2>
          <p className="cta__subtitle">
            Schedule a tour to see our homes, meet our staff, and discover how we can support your loved ones.
          </p>
          <div className="cta__actions">
            <Button
              variant="white"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Schedule a Tour
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => window.location.href = 'tel:+17277482246'}
            >
              Call Us: (727) 748-2246
            </Button>
          </div>
        </div>

        <div className="cta__info">
          <div className="cta__info-item">
            <h3 className="cta__info-title">Quick Response</h3>
            <p className="cta__info-text">We typically respond to inquiries within 24 hours</p>
          </div>
          <div className="cta__info-item">
            <h3 className="cta__info-title">No Obligation</h3>
            <p className="cta__info-text">Tours and consultations are always free</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
