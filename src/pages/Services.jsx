import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Personal Supports',
      description: 'Our Behavioral Assistants provide individualized support to help residents maintain their independence and quality of life. Personal supports include assistance with daily living activities, personal care, and maintaining a safe, comfortable home environment.',
      details: [
        'Assistance with daily living activities',
        'Personal care and hygiene support',
        'Medication reminders and monitoring',
        'Health and wellness support',
        'Transportation to appointments and community activities',
        'Household tasks and meal preparation'
      ]
    },
    {
      title: 'Respite (Under 21)',
      description: 'Temporary relief care for families and primary caregivers of individuals under 21 years of age. Our respite services provide a safe, supportive environment where young residents can stay while caregivers take a needed break.',
      details: [
        'Short-term residential care',
        'Supervision and safety monitoring',
        'Engaging activities and social interaction',
        'Continuation of daily routines',
        'Communication with families',
        'Flexible scheduling to meet family needs'
      ]
    },
    {
      title: 'Life Skills Development 1 (Companion)',
      description: 'Companion services focused on helping residents develop essential life skills for greater independence. Our trained staff work one-on-one with residents to build competencies in daily living, social interaction, and community participation.',
      details: [
        'One-on-one companionship and support',
        'Social skills development',
        'Community integration activities',
        'Money management basics',
        'Communication skills training',
        'Recreation and leisure activities',
        'Building healthy relationships'
      ]
    },
    {
      title: 'Behavior Assistant Services',
      description: 'Specialized support for individuals who need behavioral intervention and assistance. Our Behavioral Assistants are trained to work with residents who have challenging behaviors, providing consistent, compassionate support using evidence-based strategies.',
      details: [
        'Implementation of behavior support plans',
        'Positive behavior reinforcement',
        'Crisis prevention and intervention',
        'Data collection and progress monitoring',
        'Collaboration with behavior analysts and healthcare providers',
        'Environmental modifications for safety',
        'Teaching alternative communication methods'
      ]
    },
    {
      title: 'Vocational Support & Workforce Preparation',
      description: 'We help residents develop job readiness skills and provide support for entering the workforce. Our program focuses on building confidence, workplace skills, and connecting residents with employment opportunities that match their abilities and interests.',
      details: [
        'Job readiness training and interview preparation',
        'Workplace social skills development',
        'Resume building and application assistance',
        'Job coaching and on-site support',
        'Transportation to work sites',
        'Communication with employers',
        'Career exploration and goal setting'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <Section background="primary" spacing="large">
        <div className="services-hero">
          <h1>Our Services</h1>
          <p className="services-hero__subtitle">
            Elizabeth Group Home Services LLC is approved by the Agency for Persons with Disabilities (APD)
            to provide the following services for individuals with intellectual and developmental disabilities.
          </p>
        </div>
      </Section>

      {/* Services List */}
      <Section background="white" spacing="large">
        <div className="services-content">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>
              Our trained <strong>Behavioral Assistants</strong> are committed to providing high-quality,
              person-centered care. All services are delivered in accordance with APD standards and
              each resident's individual support plan.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <h3>{service.title}</h3>
                <p className="service-item__description">{service.description}</p>
                <div className="service-item__details">
                  <h4>Key Components:</h4>
                  <ul>
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Qualifications */}
      <Section background="off-white" spacing="medium">
        <div className="services-qualifications">
          <h2>Our Commitment to Quality</h2>
          <div className="qualifications-grid">
            <div className="qualification-item">
              <h3>APD Licensed</h3>
              <p>
                Licensed and approved by the Florida Agency for Persons with Disabilities
                to provide residential and support services.
              </p>
            </div>
            <div className="qualification-item">
              <h3>Trained Staff</h3>
              <p>
                All Behavioral Assistants receive ongoing training in person-centered care,
                behavior support, safety protocols, and emergency procedures.
              </p>
            </div>
            <div className="qualification-item">
              <h3>Person-Centered Approach</h3>
              <p>
                We tailor our services to each resident's unique needs, preferences, and goals,
                ensuring dignity and respect in all interactions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="medium">
        <div className="services-cta">
          <h2>Ready to Learn More?</h2>
          <p>Contact us today to discuss how our services can support your loved one.</p>
          <div className="services-cta__buttons">
            <Button
              variant="white"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => window.location.href = 'tel:+17277482246'}
            >
              Call (727) 748-2246
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
