import React from 'react';
import ProductCard from './ProductCard';
import '../styles.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={product.id || index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
