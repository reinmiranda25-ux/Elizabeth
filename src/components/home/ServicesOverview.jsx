import React from 'react';
import Section from '../common/Section';
import './ServicesOverview.css';

const ServicesOverview = () => {

  const services = [
    'Personal Supports',
    'Respite (under 21)',
    'Life Skills Development 1 (Companion)',
    'Behavior Assistant Services'
  ];

  return (
    <Section background="white">
      <div className="services-overview">
        <h2 className="services-overview__title">Services</h2>
        <p className="services-overview__subtitle">
          Our trained <strong>Behavioral Assistants</strong> provide the following services to consumers at our facilities:
        </p>
        <ul className="services-overview__list">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ServicesOverview;
