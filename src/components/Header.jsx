import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for mobile menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-darkgrey text-lightgrey p-5 flex justify-between items-center">
      <h1 className="text-primary font-bold text-3xl">LuxeStay</h1>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className={`space-x-6 md:flex ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/" className="block py-2 md:inline hover:text-primary">Home</Link>
        <Link to="/rooms" className="block py-2 md:inline hover:text-primary">Rooms</Link>
        <Link to="/services" className="block py-2 md:inline hover:text-primary">Services</Link>
        <Link to="/about" className="block py-2 md:inline hover:text-primary">About Us</Link>
        <Link to="/contact" className="block py-2 md:inline hover:text-primary">Contact</Link>
      </nav>

      {/* Book Now Button */}
      <button className="hidden md:block bg-primary text-darkgrey p-2 rounded-md">
        Book Now
      </button>
    </header>
  );
};

export default Header;
