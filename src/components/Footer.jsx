import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-darkgrey text-lightgrey p-5 sm:p-10 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">&copy; 2024 LuxeStay. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-primary" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="hover:text-primary" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-primary" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

