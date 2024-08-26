import React from 'react';
import ProviderCard from './ProviderCard';
import '../styles.css';

const ProviderIcons = ({ providers }) => {
  const uniqueProviders = [...new Set(providers.map(provider => provider.id))].map(id => providers.find(provider => provider.id === id));

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "10px" }}>
      {uniqueProviders.map(provider => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default ProviderIcons;
