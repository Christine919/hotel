import React from 'react';
import { motion } from 'framer-motion';
import SpaImage1 from '../assets/spa1.png';
import DiningImage2 from '../assets/dining2.png';
import Banner3 from '../assets/Banner3.png';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2b2b2b] text-lightgrey min-h-screen p-10 flex flex-col items-center ">
      {/* Title Section */}
      <motion.h2 
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About LuxeStay
      </motion.h2>

      {/* Main Description */}
      <motion.p 
  className="text-left sm:text-center text-xl max-w-3xl mb-6 leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  LuxeStay is the epitome of elegance, offering premium luxury accommodations in the heart of the city.
  From world-class dining experiences to serene spa treatments, every aspect of your stay is designed to provide 
  the ultimate comfort and sophistication.
</motion.p>

      {/* Image and Text Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10 w-full">
        {/* First Image and Text */}
        <motion.div 
          className="flex flex-col items-center bg-[#2f2f2f] rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={SpaImage1} alt="Spa" className="rounded-lg shadow-lg w-full" />
          <h3 className="text-2xl font-semibold mt-4">Unmatched Comfort</h3>
          <p className="text-center mt-2">
            Relax in our beautifully designed rooms featuring the finest linens, modern amenities, and personalized service.
          </p>
        </motion.div>

        {/* Second Image and Text */}
        <motion.div 
          className="flex flex-col items-center bg-[#2f2f2f] rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={DiningImage2} alt="Dining" className="rounded-lg shadow-lg w-full" />
          <h3 className="text-2xl font-semibold mt-4">World-Class Dining</h3>
          <p className="text-center mt-2">
            Delight your taste buds with gourmet cuisine prepared by award-winning chefs at our exquisite on-site restaurants.
          </p>
        </motion.div>

        {/* Third Image and Text */}
        <motion.div 
          className="flex flex-col items-center bg-[#2f2f2f] rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={Banner3} alt="Wellness" className="rounded-lg shadow-lg w-full" />
          <h3 className="text-2xl font-semibold mt-4">Wellness & Relaxation</h3>
          <p className="text-center mt-2">
            Indulge in rejuvenating spa treatments and wellness programs tailored to your specific needs.
          </p>
        </motion.div>
      </div>

      {/* Google Map */}
      <div className="w-full mt-12">
        <motion.h3
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Location
        </motion.h3>
        <motion.div
          className="w-full h-80 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093717!2d144.96305771531687!3d-37.81410797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2zQ2l0eSBGcmFua2xpbiwgVmljdG9yaWEgMzAwMCwgQXVzdHJhbGlh!5e0!3m2!1sen!2s!4v1638979482287!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-none"
            title="LuxeStay Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
