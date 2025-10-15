import React from 'react';
import Section from '../components/common/Section';
import FacilityCard from '../components/homes/FacilityCard';
import './Homes.css';

const Homes = () => {
  const facilities = [
    {
      name: '[Facility Name 1]',
      address: '[Street Address]',
      city: '[City]',
      state: 'FL',
      zip: '[ZIP]',
      bedrooms: 3,
      bathrooms: 2,
      capacity: '6 residents',
      features: [
        'Private and semi-private bedrooms',
        'Spacious common areas',
        'Fully accessible',
        'Outdoor recreation space',
        'Modern kitchen and dining area'
      ]
    },
    {
      name: '[Facility Name 2]',
      address: '[Street Address]',
      city: '[City]',
      state: 'FL',
      zip: '[ZIP]',
      bedrooms: 3,
      bathrooms: 2,
      capacity: '6 residents',
      features: [
        'Large double occupancy bedrooms',
        'Entertainment and recreation room',
        'Sensory-friendly design',
        'Secure outdoor area',
        'Updated facilities'
      ]
    }
  ];

  return (
    <div className="homes-page">
      {/* Page Header */}
      <Section background="gray" spacing="large">
        <div className="homes-header">
          <h1 className="homes-header__title">Our Homes</h1>
          <p className="homes-header__subtitle">
            Comfortable, safe, and welcoming facilities designed to feel like home
          </p>
        </div>
      </Section>

      {/* Facilities Grid */}
      <Section background="white">
        <div className="homes-intro">
          <p>
            Elizabeth Group Home operates [NUMBER] licensed facilities throughout [LOCATION], Florida.
            Each home is designed to provide a comfortable, safe environment where residents can thrive.
          </p>
        </div>

        <div className="homes-facilities">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </Section>

      {/* Amenities Section */}
      <Section background="off-white">
        <div className="homes-amenities">
          <h2 className="homes-amenities__title">Home Amenities & Features</h2>
          <div className="homes-amenities__grid">
            <div className="amenity-item">
              <h3>Comfortable Living Spaces</h3>
              <p>Private and semi-private bedrooms designed for comfort and personal expression</p>
            </div>
            <div className="amenity-item">
              <h3>Entertainment & Recreation</h3>
              <p>TV, streaming services, video games, board games, and craft supplies</p>
            </div>
            <div className="amenity-item">
              <h3>Full Kitchen & Dining</h3>
              <p>Communal kitchen and dining areas for meals and life skills development</p>
            </div>
            <div className="amenity-item">
              <h3>Outdoor Spaces</h3>
              <p>Safe outdoor areas for recreation, relaxation, and community activities</p>
            </div>
            <div className="amenity-item">
              <h3>Safety & Accessibility</h3>
              <p>Fully accessible facilities with 24/7 security and safety features</p>
            </div>
            <div className="amenity-item">
              <h3>Internet & Connectivity</h3>
              <p>WiFi access throughout the home for communication and entertainment</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Community Integration */}
      <Section background="white">
        <div className="homes-community">
          <h2>Community Integration</h2>
          <p>
            Our homes are located in established residential neighborhoods, allowing residents to be
            active members of their community. We believe in fostering connections with neighbors,
            local businesses, and community organizations to ensure our residents feel welcomed and
            included.
          </p>
          <p>
            Each location is carefully selected for proximity to:
          </p>
          <ul>
            <li>Medical facilities and healthcare providers</li>
            <li>Shopping centers and grocery stores</li>
            <li>Parks and recreational facilities</li>
            <li>Public transportation routes</li>
            <li>Community centers and social services</li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default Homes;
