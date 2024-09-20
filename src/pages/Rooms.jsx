import React from 'react';
import { motion } from 'framer-motion';

const rooms = [
  { name: 'Deluxe Suite', price: '$250/night', description: 'A spacious room with all the amenities.' },
  { name: 'Presidential Suite', price: '$500/night', description: 'Ultimate luxury and comfort.' },
  { name: 'Single Room', price: '$100/night', description: 'Affordable room for solo travelers.' },
];

const Rooms = () => {
  return (
    <div className="bg-darkgrey text-lightgrey min-h-screen p-5 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-lightgrey p-5 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
            <p className="mb-4">{room.price}</p>
            <p className="mb-4">{room.description}</p>
            <button className="bg-primary text-darkgrey py-2 px-4 rounded-md">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
