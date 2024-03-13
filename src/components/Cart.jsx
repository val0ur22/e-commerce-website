import React from 'react';

const Cart = ({ cartItems, removeFromCart, notifyItemRemoved, incrementQuantity, decrementQuantity, darkMode }) => {
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    notifyItemRemoved();
  };

  const handleIncrementQuantity = (itemId) => {
    incrementQuantity(itemId);
  };

  const handleDecrementQuantity = (itemId) => {
    decrementQuantity(itemId);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = totalPrice * 0.01;
  const shipping = 10;
  const subtotal = totalPrice + tax + shipping;


  return (
    <div className={`container mx-auto py-8 ${darkMode ? 'text-white' : 'text-black'}`}>
      <h2 className='text-3xl font-semibold font-urbanist mb-6 ml-8 text-left'>CART</h2>
      {cartItems.length === 0 ? (
        <p className='text-center font-urbanist'>Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-2/3 pr-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-400 py-4">
                <div className="flex items-center">
                  {item.image && (
                    <div className='w-16 h-16 mr-4 ml-8'>
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold font-urbanist text-2xl">{item.name}</p>
                    <p className="font-normal font-urbanist">{item.description}</p>
                    <p className='font-urbanist'>${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className={`${darkMode ? 'bg-teal-600 text-gray-100 py-1 px-2 rounded-l hover:bg-teal-950' : 'bg-teal-600 text-gray-100 py-1 px-2 rounded-l hover:bg-teal-950'}`} onClick={() => handleDecrementQuantity(item.id)}>-</button>
                  <p className="px-2">{item.quantity}</p>
                  <button className={`${darkMode ? 'bg-teal-600 text-gray-100 py-1 px-2 rounded-r hover:bg-teal-950' : 'bg-teal-600 text-gray-100 py-1 px-2 rounded-r hover:bg-teal-950'}`} onClick={() => handleIncrementQuantity(item.id)}>+</button>
                </div>
                <button
                  className="bg-red-500 text-white font-medium font-urbanist py-1 px-2 rounded hover:bg-red-600" type='button'
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0 pl-8">
            <div className="border-l border-gray-400 pl-4">
              <h3 className="text-2xl mb-4 font-semibold font-urbanist">ORDER SUMMARY</h3>
              <div className="flex justify-between mb-2">
                <p className='text-lg font-semibold font-urbanist'>Subtotal</p>
                <p className='text-lg font-semibold font-urbanist ml-auto mr-2'>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className='text-lg font-semibold font-urbanist'>Tax</p>
                <p className='text-lg font-semibold font-urbanist ml-auto mr-2'>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className='text-lg font-semibold font-urbanist'>Shipping</p>
                <p className='text-lg font-semibold font-urbanist ml-auto mr-2'>${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className='text-lg font-semibold font-urbanist'>Total</p>
                <p className='text-lg font-semibold font-urbanist ml-auto mr-2'>${subtotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-6">
              <button className='bg-blue-500 text-white font-medium font-urbanist py-2 px-4 ml-4 rounded hover:bg-blue-600'>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
