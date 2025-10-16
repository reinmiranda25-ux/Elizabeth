import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <Section background="primary" spacing="large">
        <div className="about-hero">
          <h1>About Elizabeth Group Home Services</h1>
          <p className="about-hero__subtitle">
            Providing compassionate, professional care for individuals with intellectual
            and developmental disabilities in Florida.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="white" spacing="large">
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Elizabeth Group Home Services LLC is dedicated to providing high-quality residential care
              and support services for individuals with intellectual and developmental disabilities.
              Our mission is to create a safe, nurturing environment where residents can live with
              dignity, develop their potential, and participate meaningfully in their communities.
            </p>
            <p>
              We believe every individual deserves respect, compassion, and the opportunity to live
              their best life. Our trained Behavioral Assistants work closely with residents, families,
              and healthcare providers to ensure each person receives personalized care that honors
              their unique needs, preferences, and goals.
            </p>
          </div>

          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Elizabeth Group Home Services LLC is a Florida-based provider of residential group home
              services, licensed and approved by the Agency for Persons with Disabilities (APD).
              With over 2 years of experience serving individuals with intellectual and developmental
              disabilities, we have built a reputation for compassionate, reliable care.
            </p>
            <p>
              Our team is committed to creating home environments where residents feel safe, valued,
              and supported. We focus on building strong relationships with residents and their families,
              fostering trust through consistent, person-centered care.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Approach to Care</h2>
            <p>
              At Elizabeth Group Home Services, we embrace a <strong>person-centered care philosophy</strong>.
              This means that every decision we make—from daily routines to long-term goals—is guided
              by the individual's preferences, strengths, and aspirations.
            </p>
            <div className="approach-list">
              <h3>Key Principles:</h3>
              <ul>
                <li>
                  <strong>Respect and Dignity:</strong> We treat every resident with the respect they
                  deserve, honoring their choices and supporting their independence.
                </li>
                <li>
                  <strong>Individualized Support:</strong> Each resident has a unique support plan
                  tailored to their specific needs and goals.
                </li>
                <li>
                  <strong>Safety and Comfort:</strong> We maintain safe, clean, comfortable homes where
                  residents can thrive.
                </li>
                <li>
                  <strong>Community Integration:</strong> We encourage and support residents to participate
                  in community activities, build relationships, and develop life skills.
                </li>
                <li>
                  <strong>Family Partnership:</strong> We work closely with families and guardians,
                  maintaining open communication and collaboration.
                </li>
                <li>
                  <strong>Professional Standards:</strong> Our Behavioral Assistants receive ongoing
                  training and adhere to APD regulations and best practices in care.
                </li>
              </ul>
            </div>
          </div>

          <div className="about-section">
            <h2>Licensing and Credentials</h2>
            <p>
              Elizabeth Group Home Services LLC is fully licensed by the Florida Agency for Persons
              with Disabilities (APD) to provide the following services:
            </p>
            <ul className="credentials-list">
              <li>Personal Supports</li>
              <li>Respite (under 21)</li>
              <li>Life Skills Development 1 (Companion)</li>
              <li>Behavior Assistant Services</li>
            </ul>
            <p>
              We maintain strict compliance with all APD regulations, including staff training requirements,
              safety standards, medication management protocols, and incident reporting procedures.
              Our commitment to regulatory compliance ensures the highest quality of care and safety
              for all residents.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Elizabeth Group Home Services?</h2>
            <div className="why-choose-grid">
              <div className="why-choose-item">
                <h3>Experienced Care</h3>
                <p>
                  Over 2 years of experience providing residential services for individuals with
                  intellectual and developmental disabilities.
                </p>
              </div>
              <div className="why-choose-item">
                <h3>APD Licensed</h3>
                <p>
                  Fully licensed and approved by the Florida Agency for Persons with Disabilities
                  to provide residential and support services.
                </p>
              </div>
              <div className="why-choose-item">
                <h3>Trained Staff</h3>
                <p>
                  Our Behavioral Assistants receive comprehensive training in person-centered care,
                  behavior support, and emergency procedures.
                </p>
              </div>
              <div className="why-choose-item">
                <h3>Person-Centered Philosophy</h3>
                <p>
                  Every aspect of our care is tailored to the individual's unique needs, preferences,
                  and goals.
                </p>
              </div>
              <div className="why-choose-item">
                <h3>Safe, Comfortable Homes</h3>
                <p>
                  We provide clean, well-maintained residential environments where residents feel
                  at home.
                </p>
              </div>
              <div className="why-choose-item">
                <h3>Family Partnership</h3>
                <p>
                  We believe in open communication and collaboration with families and guardians
                  to ensure the best outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="medium">
        <div className="about-cta">
          <h2>Ready to Learn More?</h2>
          <p>
            Contact us today to schedule a tour of our homes or to discuss how we can support
            your loved one.
          </p>
          <div className="about-cta__buttons">
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
              onClick={() => navigate('/homes')}
            >
              View Our Homes
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
