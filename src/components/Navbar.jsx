import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {

  return (
    <nav className={`p-4 flex justify-between items-center ${darkMode ? 'bg-teal-800 dark' : 'bg-teal-600'}`}>
      <div className="flex items-center">
        <h1 className="text-xl text-center font-medium font-urbanist text-white">aqua beads</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className="font-urbanist ml-6 text-white hover:text-gray-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="font-urbanist text-white hover:text-gray-300"
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button
          className={`absolute top-2 right-2 p-2 rounded-full ${darkMode ? 'bg-amber-500 text-white' : 'bg-teal-950 text-white'}`}
          onClick={toggleDarkMode}
        >
          <i className="material-icons">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </i>
        </button>
        <Link to="/cart" className="absolute top-2 right-14 p-2 rounded-full bg-teal-950 text-white hover:bg-violet-900">
          <i className="material-icons">shopping_cart</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
