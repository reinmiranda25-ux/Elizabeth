import React from 'react';
import Section from '../components/common/Section';
import './Legal.css';

const Privacy = () => {
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
          <h1>Privacy Policy</h1>
          <p className="legal-hero__date">Last Updated: {currentDate}</p>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" spacing="large">
        <div className="legal-content">
          <p className="legal-intro">
            Elizabeth Group Home Services LLC ("we," "our," or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website or inquire about our services.
          </p>

          <div className="legal-section">
            <h2>1. Information We Collect</h2>
            <h3>Personal Information You Provide:</h3>
            <p>When you contact us through our website or phone, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
              <li>Information about the individual seeking services (if provided)</li>
            </ul>

            <h3>Automatically Collected Information:</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and requests</li>
              <li>Provide information about our services</li>
              <li>Schedule tours and consultations</li>
              <li>Process admission applications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. HIPAA and Protected Health Information (PHI)</h2>
            <h3>For individuals who become residents:</h3>
            <p>
              Elizabeth Group Home Services LLC is a covered entity under the Health Insurance Portability and
              Accountability Act (HIPAA). We maintain separate HIPAA-compliant policies and procedures for
              handling Protected Health Information (PHI) of our residents.
            </p>
            <p>
              Residents and their legal representatives receive a separate Notice of Privacy Practices that
              explains how we use and disclose PHI in accordance with HIPAA regulations.
            </p>
            <p>
              The privacy practices described in this website Privacy Policy do not apply to PHI, which is
              governed by our HIPAA Notice of Privacy Practices.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties.</p>
            <p>We may share your information with:</p>
            <ul>
              <li>Healthcare providers and support coordinators (with appropriate consent)</li>
              <li>The Florida Agency for Persons with Disabilities (APD) as required</li>
              <li>Legal authorities when required by law</li>
              <li>Service providers who assist with website operations (under confidentiality agreements)</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction. However, no internet transmission is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience. You can
              set your browser to refuse cookies, but this may limit your ability to use certain features of our
              website.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for information use (where applicable)</li>
            </ul>
            <p>To exercise these rights, please contact us using the information below.</p>
          </div>

          <div className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our website is not directed to children under 13. We do not knowingly collect personal information
              from children under 13 through our website. If you believe we have collected such information,
              please contact us immediately.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Florida Residents</h2>
            <p>
              Florida residents have specific privacy rights under Florida law. If you are a Florida resident
              and would like to exercise your rights, please contact us.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy practices, please
              contact us:
            </p>
            <ul className="legal-contact-list">
              <li><strong>Phone:</strong>{' '}
                <a href="tel:+17277482246" className="legal-link">(727) 748-2246</a>
              </li>
              <li><strong>Email:</strong>{' '}
                <a href="mailto:frencismiranda@gmail.com" className="legal-link">frencismiranda@gmail.com</a>
              </li>
              <li><strong>Address:</strong> 8628 Magnolia Drive, Seminole, FL 33777</li>
            </ul>
            <p className="legal-note">
              For questions specifically about HIPAA and Protected Health Information for residents, please
              request our HIPAA Notice of Privacy Practices.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
