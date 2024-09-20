import React from 'react';
import { motion } from 'framer-motion';
import service from '../assets/service.png';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2b2b2b] text-lightgrey min-h-screen p-10 flex flex-col items-center">
      {/* Page Title */}
      <motion.h2 
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      {/* Layout for Image and Form */}
      <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl">
        {/* Image Section */}
        <div>
        <motion.img
          src={service}
          alt="Contact Service"
          className="w-full max-w-md mb-10 lg:mb-0 lg:mr-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
         {/* Contact Information */}
          <motion.div 
            className="mt-8 text-center text-xl max-w-3xl mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>We'd love to hear from you! Whether you have questions, feedback, or require assistance, our team is here to help.</p>
            <p className="mt-4">
              Reach us at <a href="mailto:info@luxestay.com" className="text-primary hover:underline">info@luxestay.com</a>
              <br />
              or call us at <span className="font-semibold">+123-456-7890</span>
            </p>
          </motion.div>
        </div>
        

        {/* Contact Information and Form Section */}
        <div className="flex flex-col w-full">
          {/* Contact Form */}
          <motion.form 
            className="w-full bg-[#2f2f2f] p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 bg-[#1f1f1f] text-lightgrey rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 bg-[#1f1f1f] text-lightgrey rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 bg-[#1f1f1f] text-lightgrey rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-darkgrey font-bold py-4 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
