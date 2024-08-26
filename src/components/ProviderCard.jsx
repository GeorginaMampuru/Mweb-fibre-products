import React from 'react';
import '../styles.css';

const logoBaseURL = "https://www.mweb.co.za/media/images/providers";

const ProviderCard = ({ provider }) => {
  return (
    <div className="provider-card">
      <img
        src={`${logoBaseURL}/${provider.logo}`}
        alt={provider.name}
        className="provider-icon"
      />
      <h3>{provider.name}</h3>
    </div>
  );
};

export default ProviderCard;
