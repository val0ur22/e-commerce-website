import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const addToCart = () => {
    onAddToCart(product);
  };


  return (
    <div className="border rounded-lg p-0 mx-2 my-4 w-40 flex flex-col items-center border-transparent bg-teal-600 text-white dark:bg-teal-800">
      {product.image && (
        <div className='w-full h-32 mb-2'>
          <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-t-lg" />
        </div>
      )}
      <h3 className="text-lg font-urbanist font-semibold mb-2">{product.name}</h3>
      <p className="text-xs font-urbanist mb-2 text-center">{product.description}</p>
      <button className="mt-2 font-urbanist bg-violet-800 dark:bg-violet-500 text-white py-1 px-3 rounded hover:bg-violet-900 mb-4" onClick={addToCart}>Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;