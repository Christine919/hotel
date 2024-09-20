import React from 'react';
import { motion } from 'framer-motion';
import Room1 from '../assets/Room1.png';
import Room2 from '../assets/Room2.png';
import Room3 from '../assets/Room3.png';

// Room data with image URLs
const rooms = [
  {
    name: 'Deluxe Room',
    price: '$350/night',
    description: 'Affordable room for solo travelers.',
    image: Room1,
  },
  {
    name: 'Superior Room',
    price: '$550',
    description: 'Ultimate luxury and comfort.',
    image: Room2,
  },
  {
    name: 'Executive Room',
    price: '$850/night',
    description: 'A spacious room with all the amenities.',
    image: Room3,
  },
];

const Rooms = () => {
  return (
    <div className="bg-darkgrey text-lightgrey min-h-screen p-5 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-darkgrey p-5 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Room Image */}
            <motion.img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
            <p className="mb-2 text-lg">{room.price}</p>
            <p className="mb-4">{room.description}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-primary text-white py-2 px-4 rounded-md"
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
