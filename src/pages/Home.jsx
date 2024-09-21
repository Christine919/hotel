import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Banner from "../assets/Banner.png";  
import Banner3 from "../assets/Banner3.png";

const Home = () => {
  return (
    <div className="bg-darkgrey text-lightgrey min-h-screen">
      
      {/* Hero Section with Background Image */}
      <div 
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center p-5 relative"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content on Top of the Overlay */}
        <motion.section
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl mb-4 text-white drop-shadow-lg">
            Welcome to LuxeStay
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-lightgrey drop-shadow-lg">
            Discover luxury and comfort in the heart of the city.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-primary text-darkgrey py-3 px-8 rounded-md text-lg"
          >
             <Link to="/rooms">Book Your Stay</Link>
          </motion.button>
        </motion.section>
      </div>

      {/* Section 1: About the Hotel */}
      <div className="bg-lightgrey text-darkgrey p-10 md:p-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Luxury Redefined</h2>
          <p className="text-lg sm:text-xl mb-8">
            LuxeStay offers an unparalleled experience with world-class amenities, exquisite design, and premium services that ensure your stay is both relaxing and memorable.
          </p>
        </motion.div>
      </div>

      {/* Section 2: Rooms and Suites */}
      <div 
        className="bg-cover bg-center min-h-[60vh] flex items-center justify-center text-center p-5"
        style={{
          backgroundImage: `url(${Banner3})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-darkgrey bg-opacity-60 p-10 rounded-lg"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Rooms & Suites</h2>
          <p className="text-lg sm:text-xl mb-8">
            Choose from our selection of deluxe rooms and luxurious suites, each offering stunning views, sophisticated interiors, and 24/7 service.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-primary text-darkgrey py-2 px-6 rounded-md"
          >
            <Link to="/rooms">View Our Rooms</Link>
          </motion.button>
        </motion.div>
      </div>

      {/* Section 3: Dining and Experiences */}
      <div className="bg-lightgrey text-darkgrey p-10 md:p-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Dining & Experiences</h2>
          <p className="text-lg sm:text-xl mb-8">
            Savor gourmet dining at our in-house restaurant, unwind in the serene spa, or explore the local sights with curated experiences just for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-primary text-darkgrey py-2 px-6 rounded-md"
          >
            <Link to="/services">Explore More</Link>
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
