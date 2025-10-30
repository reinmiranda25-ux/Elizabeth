import React from 'react';
import Section from '../components/common/Section';
import './Legal.css';

const Terms = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <Section background="primary" spacing="medium">
        <div className="legal-hero">
          <h1>Terms of Service</h1>
          <p className="legal-hero__date">Last Updated: {currentDate}</p>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" spacing="large">
        <div className="legal-content">
          <p className="legal-intro">
            Welcome to Elizabeth Group Home Services LLC. These Terms of Service govern your use of our
            website and inquiries about our services.
          </p>

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use this website.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. About Our Services</h2>
            <p>
              Elizabeth Group Home Services LLC is a licensed provider of residential care and support services
              for individuals with intellectual and developmental disabilities in Florida. We are licensed by the
              Florida Agency for Persons with Disabilities (APD).
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Eligibility for Services</h2>
            <p>Our residential services are available to individuals who:</p>
            <ul>
              <li>Are enrolled in the APD iBudget Florida waiver program</li>
              <li>Have been assessed and approved for group home services</li>
              <li>Meet our admission requirements as determined through our assessment process</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Website Use</h2>
            <p>
              This website provides information about our services and facilities. It is not a substitute for
              direct consultation with our staff or healthcare professionals. Information on this website does
              not constitute medical advice.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Admission Process</h2>
            <p>
              Admission to our facilities is subject to availability, eligibility verification, and completion
              of our assessment process. We reserve the right to determine whether we can appropriately meet an
              individual's needs.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Accuracy of Information</h2>
            <p>
              We strive to provide accurate and up-to-date information on this website. However, information is
              subject to change without notice. Please contact us directly to confirm current services, availability,
              and other details.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the property
              of Elizabeth Group Home Services LLC and is protected by copyright laws.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              Elizabeth Group Home Services LLC and its staff are not liable for any damages arising from the
              use of this website or reliance on information contained herein.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Privacy</h2>
            <p>
              Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy
              to understand how we collect and use information.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to this website.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Florida.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <ul className="legal-contact-list">
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:+17277482246" className="legal-link">(727) 748-2246</a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:frencismiranda@gmail.com" className="legal-link">frencismiranda@gmail.com</a>
              </li>
              <li>
                <strong>Address:</strong> 8628 Magnolia Drive, Seminole, FL 33777
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
