import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import './Admissions.css';

const Admissions = () => {
  const navigate = useNavigate();

  const admissionSteps = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Contact us by phone or email to discuss your needs and ask questions. We will provide information about our services, answer your questions, and determine if we may be a good fit.'
    },
    {
      step: '2',
      title: 'Schedule a Visit',
      description: 'Arrange a time to tour our facility and meet our staff. This gives you an opportunity to see our homes, understand our approach to care, and get a feel for our environment.'
    },
    {
      step: '3',
      title: 'Assessment and Documentation',
      description: 'Provide necessary documentation including APD eligibility, medical records, behavior support plans, and any relevant assessments. We will review these to ensure we can meet the individual\'s needs.'
    },
    {
      step: '4',
      title: 'Develop Support Plan',
      description: 'Work with our team to develop an individualized support plan that addresses the resident\'s unique needs, preferences, and goals.'
    },
    {
      step: '5',
      title: 'Move-In',
      description: 'Once everything is finalized, we will coordinate a move-in date and help transition the individual into their new home.'
    }
  ];

  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <Section background="primary" spacing="large">
        <div className="admissions-hero">
          <h1>Admissions</h1>
          <p className="admissions-hero__subtitle">
            Learn about our admission process and how to apply for services at
            Elizabeth Group Home Services LLC.
          </p>
        </div>
      </Section>

      {/* Eligibility Section */}
      <Section background="white" spacing="large">
        <div className="admissions-content">
          <div className="admissions-section">
            <h2>Who We Serve</h2>
            <p>
              Elizabeth Group Home Services LLC provides residential care and support services for
              individuals with intellectual and developmental disabilities who are eligible for services
              through the Florida Agency for Persons with Disabilities (APD).
            </p>
            <p>
              We serve individuals who:
            </p>
            <ul className="eligibility-list">
              <li>Are enrolled in the APD iBudget Florida waiver program</li>
              <li>Have been assessed and approved for group home services</li>
              <li>Need support with daily living activities and life skills</li>
              <li>May benefit from behavioral assistance and support</li>
              <li>Seek a safe, supportive residential environment</li>
            </ul>
            <p>
              If you are unsure about eligibility, please contact us. We are happy to discuss your
              situation and help you understand the options available.
            </p>
          </div>

          <div className="admissions-section">
            <h2>How to Apply</h2>
            <p>
              Our admission process is designed to ensure that we can provide the right level of care
              and support for each individual. Here are the steps:
            </p>
            <div className="admission-steps">
              {admissionSteps.map((item, index) => (
                <div key={index} className="admission-step">
                  <div className="admission-step__number">{item.step}</div>
                  <div className="admission-step__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admissions-section">
            <h2>Required Documentation</h2>
            <p>
              To complete the admission process, we will need the following documentation:
            </p>
            <ul className="documentation-list">
              <li>Proof of APD eligibility and enrollment in the iBudget Florida waiver</li>
              <li>Current medical records and physician information</li>
              <li>Medication list and administration instructions</li>
              <li>Behavior support plan (if applicable)</li>
              <li>Emergency contact information</li>
              <li>Legal guardianship or representative documentation (if applicable)</li>
              <li>Any relevant psychological, educational, or therapeutic assessments</li>
              <li>Current individual support plan or care plan</li>
            </ul>
            <p>
              We understand that gathering documentation can take time. Our team will work with you
              to ensure a smooth process.
            </p>
          </div>

          <div className="admissions-section">
            <h2>What to Expect</h2>
            <p>
              When a resident joins Elizabeth Group Home Services, they can expect:
            </p>
            <ul className="expectations-list">
              <li>
                <strong>A Welcoming Environment:</strong> We create a warm, supportive atmosphere
                where new residents feel comfortable and safe.
              </li>
              <li>
                <strong>Personalized Support:</strong> Each resident receives care tailored to their
                unique needs, preferences, and goals.
              </li>
              <li>
                <strong>Trained Staff:</strong> Our Behavioral Assistants are experienced in working
                with individuals with intellectual and developmental disabilities.
              </li>
              <li>
                <strong>Open Communication:</strong> We maintain regular communication with families
                and guardians to provide updates and address any concerns.
              </li>
              <li>
                <strong>Community Integration:</strong> We encourage residents to participate in
                community activities and develop meaningful relationships.
              </li>
              <li>
                <strong>Ongoing Support:</strong> We continuously monitor and adjust support plans
                to ensure residents are thriving.
              </li>
            </ul>
          </div>

          <div className="admissions-section">
            <h2>Transition Period</h2>
            <p>
              We recognize that moving into a new home can be a significant transition. Our team works
              closely with residents, families, and support coordinators to make the transition as smooth
              as possible. We encourage visits before move-in, gradual transitions when appropriate, and
              ongoing communication to address any concerns that arise.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" spacing="medium">
        <div className="admissions-cta">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to begin the admission process or to schedule a tour of our homes.
          </p>
          <div className="admissions-cta__buttons">
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

export default Admissions;
