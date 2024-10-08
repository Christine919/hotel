import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-darkgrey text-lightgrey p-5 flex items-center shadow-lg">
      <h1 className="text-primary font-bold text-3xl">
        <Link to="/">LuxeStay</Link>
      </h1>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMenu} className="text-lightgrey focus:outline-none">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.nav 
          className="absolute top-full left-0 w-full bg-darkgrey shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col p-4">
            <li className="my-2"><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li className="my-2"><Link to="/rooms" onClick={toggleMenu}>Rooms</Link></li>
            <li className="my-2"><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li className="my-2"><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li className="my-2"><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </motion.nav>
      )}
      
      {/* Desktop Navigation */}
      <nav className={`hidden md:flex space-x-6 ml-auto`}>
        <Link to="/" className="block py-2 hover:text-primary">Home</Link>
        <Link to="/rooms" className="block py-2 hover:text-primary">Rooms</Link>
        <Link to="/services" className="block py-2 hover:text-primary">Services</Link>
        <Link to="/about" className="block py-2 hover:text-primary">About Us</Link>
        <Link to="/contact" className="block py-2 hover:text-primary">Contact</Link>
      </nav>

      {/* Book Now Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-primary text-darkgrey text-sm rounded-md text-lg ml-4"
      >
        <Link to="/rooms" className="hidden md:block p-2">Book Now</Link>
      </motion.button>
    </header>
  );
};

export default Header;
