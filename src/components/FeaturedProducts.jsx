import React from 'react';
import ProductCard from './ProductCard';
import { products } from './Shop';

const FeaturedProducts = ({ onAddToCart }) => {

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto py-8 ml-8">
      <h2 className="text-3xl font-urbanist font-normal mb-2 ml-2 mt-2 text-left">Featured Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
