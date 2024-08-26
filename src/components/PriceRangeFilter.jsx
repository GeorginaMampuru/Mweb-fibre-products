import React, { useState } from 'react';
import '../styles.css';

const PriceRangeFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    onFilterChange(e.target.value, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    onFilterChange(minPrice, e.target.value);
  };

  return (
    <div className="price-range-filter">
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          placeholder="Min"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          placeholder="Max"
        />
      </label>
    </div>
  );
};

export default PriceRangeFilter;
