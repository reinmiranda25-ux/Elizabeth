import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import './Legal.css';

const ResidentPrivacyRights = () => {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <Section background="primary" spacing="medium">
        <div className="legal-hero">
          <h1>Resident Privacy Rights</h1>
          <p className="legal-hero__subtitle">
            We protect every resident's privacy and personal information
          </p>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" spacing="large">
        <div className="legal-content">
          <p className="legal-intro">
            At Elizabeth Group Home Services, we are committed to protecting the privacy and dignity of
            every resident. All residents have the right to privacy in their daily lives and confidentiality
            of their records. This page outlines the comprehensive privacy protections we provide.
          </p>

          <div className="legal-section">
            <h2>Personal Privacy Rights</h2>
            <p>Every resident has the right to:</p>
            <ul>
              <li>Private time in their rooms</li>
              <li>Personal space and belongings that are respected</li>
              <li>Private conversations with family and friends</li>
              <li>Privacy during personal care and medical activities</li>
              <li>Control over who sees their information</li>
            </ul>
            <p>
              We protect these rights while maintaining necessary safety monitoring based on individual needs.
            </p>
          </div>

          <div className="legal-section">
            <h2>Bedroom Privacy</h2>
            <p>We respect resident bedrooms as private spaces:</p>
            <ul>
              <li>Staff must knock before entering resident rooms</li>
              <li>Staff wait for permission before going in</li>
              <li>Residents have private time in rooms with appropriate safety checks</li>
              <li>Personal belongings are respected</li>
              <li>Room searches only occur with supervisor approval and safety concerns</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Bathroom and Personal Care Privacy</h2>
            <p>We maintain dignity during all personal care:</p>
            <ul>
              <li>Complete privacy in bathrooms</li>
              <li>Staff assist only when residents need help</li>
              <li>Same gender staff preferred for personal care when possible</li>
              <li>Minimum assistance necessary is provided</li>
              <li>Dignity maintained during all personal care activities</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Communication Privacy</h2>
            <p>Residents have the right to private communications:</p>
            <ul>
              <li>Private phone calls</li>
              <li>Private mail (legal mail never opened by staff)</li>
              <li>Private visiting areas available</li>
              <li>Attorney visits are completely confidential</li>
              <li>Staff monitoring only occurs when documented safety concerns exist</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Information Privacy and Confidentiality</h2>
            <p>We keep all resident information confidential:</p>
            <ul>
              <li>Medical and case records are kept confidential</li>
              <li>Information is shared only with authorized people</li>
              <li>Residents have the right to know who has access to their records</li>
              <li>Protection against inappropriate sharing</li>
              <li>Different types of information (medical records, case history, personal information) all receive appropriate confidentiality protections</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Who Can See Resident Information</h2>
            <h3>People who always have access:</h3>
            <ul>
              <li>The resident</li>
              <li>Legal guardians or parents</li>
              <li>Assigned case managers and staff</li>
              <li>Medical professionals providing treatment</li>
              <li>Court-appointed advocates and attorneys</li>
            </ul>

            <h3>People who need written permission first:</h3>
            <ul>
              <li>Other family members</li>
              <li>Schools or employers</li>
              <li>Other agencies</li>
              <li>Community members</li>
            </ul>

            <h3>People who never have access without court orders:</h3>
            <ul>
              <li>General public</li>
              <li>Media</li>
              <li>Staff not working with the resident</li>
              <li>Other residents or families</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>How We Protect Information</h2>
            <h3>Physical Records:</h3>
            <ul>
              <li>Kept in locked filing cabinets</li>
              <li>Limited staff access</li>
              <li>Secure storage areas</li>
              <li>Properly disposed through shredding</li>
            </ul>

            <h3>Electronic Records:</h3>
            <ul>
              <li>Password-protected computers</li>
              <li>Secure databases</li>
              <li>Limited user access</li>
              <li>Encrypted sensitive data</li>
            </ul>

            <h3>Verbal Information:</h3>
            <ul>
              <li>Private discussions only</li>
              <li>Professional conversations</li>
              <li>No gossip about residents</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Photos and Videos</h2>
            <p>We always respect residents' wishes regarding photos and videos:</p>
            <ul>
              <li>We always ask permission first</li>
              <li>Get written consent for public use</li>
              <li>Respect if residents decline</li>
              <li>Recognize some residents may never be photographed for safety reasons</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>HIPAA and Medical Privacy</h2>
            <p>
              Elizabeth Group Home Services is a covered entity under the Health Insurance Portability and
              Accountability Act (HIPAA). We maintain separate HIPAA-compliant policies and procedures for
              handling Protected Health Information (PHI) of our residents.
            </p>
            <p>Key protections include:</p>
            <ul>
              <li>Medical information requiring special confidentiality</li>
              <li>Health records kept separately</li>
              <li>Special consent needed for sharing medical information</li>
              <li>Doctor-patient confidentiality maintained</li>
            </ul>
            <p>
              Residents and their legal representatives receive a separate Notice of Privacy Practices that
              explains how we use and disclose PHI in accordance with HIPAA regulations.
            </p>
          </div>

          <div className="legal-section">
            <h2>Reporting Privacy Concerns</h2>
            <p>If you have concerns about privacy, residents or families can:</p>
            <ul>
              <li>Tell any staff member</li>
              <li>Meet with supervisors</li>
              <li>File written complaints</li>
              <li>Contact the administrator</li>
              <li>Contact outside agencies if needed</li>
            </ul>
            <p className="legal-note">
              <strong>Emergency Contacts:</strong><br />
              DCF Abuse Hotline: 1-800-96-ABUSE (1-800-962-2873)
            </p>
          </div>

          <div className="legal-section">
            <h2>Staff Responsibilities</h2>
            <p>All staff are trained and required to:</p>
            <ul>
              <li>Respect resident privacy always</li>
              <li>Keep all information confidential</li>
              <li>Only access information needed for their job</li>
              <li>Get proper permission before sharing information</li>
              <li>Report privacy violations immediately</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Questions About Privacy Rights?</h2>
            <p>
              For more information about resident privacy rights, please contact us. During facility tours,
              we are happy to discuss our privacy policies in detail and answer any questions you may have.
            </p>
          </div>

          <div className="legal-cta-buttons">
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => navigate('/admissions')}
            >
              Learn About Admissions
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ResidentPrivacyRights;
