import React, { useState } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just show success message
    // In production, this would send to a backend/email service
    setFormStatus('success');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <Section background="primary" spacing="large">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p className="contact-hero__subtitle">
            We're here to answer your questions and help you learn more about our services.
            Reach out today to schedule a tour or discuss your needs.
          </p>
        </div>
      </Section>

      {/* Contact Content */}
      <Section background="white" spacing="large">
        <div className="contact-content">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Contact Elizabeth Group Home Services LLC by phone, email, or use the form
                to send us a message. We look forward to hearing from you.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+17277482246" className="contact-link">
                      (727) 748-2246
                    </a>
                    {' '}(Cellphone)
                  </p>
                  <p>
                    <a href="tel:+17272584090" className="contact-link">
                      (727) 258-4090
                    </a>
                    {' '}(Telephone)
                  </p>
                </div>

                <div className="contact-detail-item">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:frencismiranda@gmail.com" className="contact-link">
                      frencismiranda@gmail.com
                    </a>
                  </p>
                </div>

                <div className="contact-detail-item">
                  <h3>Address</h3>
                  <p className="contact-address">
                    8628 Magnolia Drive<br />
                    Seminole, FL 33777
                  </p>
                </div>

                <div className="contact-detail-item">
                  <h3>Business Hours</h3>
                  <p>24/7 Residential Care</p>
                  <p className="contact-hours-note">
                    Administrative inquiries: Monday - Friday, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>

              {formStatus === 'success' && (
                <div className="form-message form-message--success">
                  Thank you for your message! We will get back to you as soon as possible.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="admission">Admission Information</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="services">Questions About Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="large" fullWidth>
                  Send Message
                </Button>

                <p className="form-note">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional CTA */}
      <Section background="off-white" spacing="medium">
        <div className="contact-additional">
          <h2>Prefer to Call?</h2>
          <p>
            We understand that some questions are best answered over the phone.
            Feel free to call us directly at{' '}
            <a href="tel:+17277482246" className="contact-phone-link">
              (727) 748-2246
            </a>
            {' '}and we'll be happy to speak with you.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
