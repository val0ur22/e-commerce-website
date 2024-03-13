import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import "./styles/tailwind.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const notifyItemAdded = () => {
    setNotificationMessage("Item added to cart!");
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const notifyItemRemoved = () => {
    setNotificationMessage("Item removed from cart!");
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
    notifyItemRemoved();
  };

  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 }; // Assuming each item object has a 'quantity' property
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {showNotification && (
          <div className="absolute top-4 right-4 m-4 p-4 bg-violet-500 text-white rounded">
            {notificationMessage}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop setCartItems={setCartItems} notifyItemAdded={notifyItemAdded} cartItems={cartItems} />} />
          <Route
            path="/cart"
            element={<Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              notifyItemRemoved={notifyItemRemoved}
              darkMode={darkMode} />} />
          <Route path="/product/:productId" element={<ProductCard darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
