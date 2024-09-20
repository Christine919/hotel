import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkgrey text-lightgrey p-5 sm:p-10 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left">&copy; 2024 LuxeStay. All Rights Reserved.</p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-primary">Facebook</a>
          <a href="#" className="hover:text-primary">Instagram</a>
          <a href="#" className="hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
