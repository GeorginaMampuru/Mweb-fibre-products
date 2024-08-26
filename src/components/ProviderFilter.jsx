import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const ProviderFilter = ({ providers = [], onFilterChange, selectedProviders = [] }) => {
  const [speedOptions, setSpeedOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [selectedSpeed, setSelectedSpeed] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    if (providers && Array.isArray(providers)) {
      // Extract unique speeds and prices from the list of products
      const speeds = new Set();
      const prices = new Set();

      providers.forEach((product) => {
        if (typeof product === 'string') {
          const [speed, price] = product.split(' - Openserve ')[0].split('Mbps Fibre');
          speeds.add(`${speed}Mbps`);
          prices.add(price.trim());
        }
      });

      setSpeedOptions(Array.from(speeds));
      setPriceOptions(Array.from(prices));
    }
  }, [providers]);

  const handleSpeedChange = (e) => {
    setSelectedSpeed(e.target.value);
    onFilterChange(e.target.value, selectedPrice);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    onFilterChange(selectedSpeed, e.target.value);
  };

  return (
    <div className="provider-filter">
      <div className="provider-banner">
        <h3>Fiber Products</h3>
        <p>Select a fiber infrastructure provider below, browse the products available, and complete a coverage search.</p>
      </div>
      <div className="filter-dropdowns">
        <select value={selectedSpeed} onChange={handleSpeedChange}>
          <option value="">Filter by Speed</option>
          {speedOptions.map((speed) => (
            <option key={speed} value={speed}>{speed}</option>
          ))}
        </select>
        <select value={selectedPrice} onChange={handlePriceChange}>
          <option value="">Filter by Price</option>
          {priceOptions.map((price) => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>
      <div className="provider-cards">
        {providers && providers.map((provider, index) => (
          <div
            key={index}
            className={`provider-card ${selectedProviders.includes(provider) ? 'selected' : ''}`}
            onClick={() => onFilterChange(provider)}
          >
            <p>{provider.name}</p>
            <img src={provider.logo} alt={`${provider.name} logo`} />
          </div>
        ))}
      </div>
    </div>
  );
};

ProviderFilter.propTypes = {
  providers: PropTypes.array,
  onFilterChange: PropTypes.func.isRequired,
  selectedProviders: PropTypes.array.isRequired,
};

export default ProviderFilter;
