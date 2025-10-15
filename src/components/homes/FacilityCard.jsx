import React from 'react';
import Card from '../common/Card';
import './FacilityCard.css';

const FacilityCard = ({ name, address, city, state, zip, bedrooms, bathrooms, capacity, features }) => {
  return (
    <Card padding="none" className="facility-card">
      <div className="facility-card__image">
        <div className="facility-card__image-placeholder">
          <span className="facility-card__label">{name}</span>
        </div>
      </div>
      <div className="facility-card__content">
        <h3 className="facility-card__title">{name}</h3>
        <div className="facility-card__address">
          <p>{address}</p>
          <p>{city}, {state} {zip}</p>
        </div>
        <div className="facility-card__details">
          <div className="facility-card__detail">
            <span>{bedrooms} Bedrooms</span>
          </div>
          <div className="facility-card__detail">
            <span>{bathrooms} Bathrooms</span>
          </div>
          <div className="facility-card__detail">
            <span>Capacity: {capacity}</span>
          </div>
        </div>
        {features && features.length > 0 && (
          <div className="facility-card__features">
            <h4>Features:</h4>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FacilityCard;
