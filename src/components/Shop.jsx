import React from 'react';
import ProductCard from './ProductCard';


export const products = [
  { id: 1, name: 'Assorted Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1331705/pexels-photo-1331705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 2, name: 'Stone Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1339851/pexels-photo-1339851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 3, name: 'Teal Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1331700/pexels-photo-1331700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 4, name: 'Gold Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1331704/pexels-photo-1331704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 5, name: 'Yellow Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1331703/pexels-photo-1331703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 6, name: 'Green Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1331699/pexels-photo-1331699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 7, name: 'Orange Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/1331696/pexels-photo-1331696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

  { id: 8, name: 'Letter Beads', description: '1000 beads per pack', price: 10, quantity: 10, image: 'https://images.pexels.com/photos/5908371/pexels-photo-5908371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },

];

function Shop({ setCartItems, notifyItemAdded, cartItems }) {
  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
    }
    notifyItemAdded(product.id);
  };

  return (
    <div className='flex justify-center'>
      <div>
        <h2 className='text-3xl font-urbanist font-normal mb-2 ml-2 mt-2 text-left'>Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;