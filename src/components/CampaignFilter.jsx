import React from 'react';
import '../styles.css';

const CampaignFilter = ({ campaigns, onFilterChange }) => {
  return (
    <div className="campaign-filter">
      {campaigns.map(campaign => (
        <label key={campaign.code} className="campaign-option">
          <input
            type="radio"
            name="campaign"
            value={campaign.code}
            onChange={() => onFilterChange(campaign.code)}
          />
          {campaign.name}
        </label>
      ))}
    </div>
  );
};

export default CampaignFilter;
