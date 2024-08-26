import React from 'react';
import '../styles.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.providerLogo} alt={product.providerName} />
      <h3>{product.name}</h3>
      <p>{product.speed} Mbps</p>
      <p>{product.price} per month</p>
      <button>Check coverage</button>
    </div>
  );
};

export default ProductCard;
