import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    capacity: '2 adults',
    facilities: 'Free Wi-Fi, TV, AC, Breakfast included',
    image: Room1,
  },
  {
    name: 'Superior Room',
    price: '$550/night',
    description: 'Ultimate luxury and comfort.',
    capacity: '2 adults, 1 child',
    facilities: 'King-size bed, Free Wi-Fi, Ocean view',
    image: Room2,
  },
  {
    name: 'Executive Room',
    price: '$850/night',
    description: 'A spacious room with all the amenities.',
    capacity: '4 adults',
    facilities: 'Private balcony, Kitchenette, Spa access',
    image: Room3,
  },
  {
    name: 'Suite Room',
    price: '$1200/night',
    description: 'Perfect for families with high expectations.',
    capacity: '6 adults',
    facilities: 'Private pool, Butler service, Mini-bar',
    image: Room1,
  },
  {
    name: 'Family Room',
    price: '$450/night',
    description: 'Comfortable space for family vacations.',
    capacity: '3 adults, 2 children',
    facilities: 'Two queen beds, Free Wi-Fi, Kids area',
    image: Room2,
  },
  {
    name: 'Presidential Suite',
    price: '$1500/night',
    description: 'The ultimate luxury experience.',
    capacity: '8 adults',
    facilities: 'Private garden, Jacuzzi, Personal chef',
    image: Room3,
  },
];

const Rooms = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [showCheckBar, setShowCheckBar] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]);

  const toggleCheckBar = () => {
    setShowCheckBar(prev => !prev);
  };

  const handleSearch = () => {
    // For demo: randomly pick 3 rooms to show
    const shuffledRooms = [...rooms].sort(() => 0.5 - Math.random());
    setAvailableRooms(shuffledRooms.slice(0, 3));
  };

  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2b2b2b] text-lightgrey min-h-screen p-10 flex flex-col items-center">

      {/* Page Title */}
      <motion.h2 
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Rooms
      </motion.h2>

      {/* Reserve Button */}
      <button 
        className="w-full py-2 bg-primary text-white rounded-md mb-4 sm:hidden" 
        onClick={toggleCheckBar}
      >
        Reserve
      </button>

      {/* Check Bar - square size on mobile */}
<div className={`text-white p-4 border-solid border-2 border-gray-300 border-opacity-50 rounded-lg shadow-lg mb-10 w-full max-w-5xl ${showCheckBar ? '' : 'hidden sm:block'} sm:w-auto sm:h-auto`}>
  {/* Flex container for inputs */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    {/* Adults and Children inputs stay on the same line even on mobile */}
    <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
      <div className="flex items-center mr-4">
        <label className="mr-2">Adults:</label>
        <input 
          type="number" 
          value={adults} 
          onChange={(e) => setAdults(e.target.value)} 
          className="text-black border p-1 w-16 mr-2" 
        />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Children:</label>
        <input 
          type="number" 
          value={children} 
          onChange={(e) => setChildren(e.target.value)} 
          className="text-black border p-1 w-16" 
        />
      </div>
    </div>

   {/* Check-in and Check-out inputs on the same line for mobile */}
<div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0 sm:mr-4">
  <div className="flex items-center mr-4">
    <label className="mr-2">Check-in:</label>
    <input 
      type="date" 
      value={checkIn} 
      onChange={(e) => setCheckIn(e.target.value)} 
      className="text-black border p-1 w-24" // Adjust width
    />
  </div>
  <div className="flex items-center">
    <label className="mr-2">Check-out:</label>
    <input 
      type="date" 
      value={checkOut} 
      onChange={(e) => setCheckOut(e.target.value)} 
      className="text-black border p-1 w-24" // Adjust width
    />
  </div>
</div>

    {/* Center the button */}
    <div className="flex justify-center mt-4 sm:mt-0 sm:justify-end">
      <button 
        onClick={handleSearch} 
        className="bg-primary text-white py-2 px-6 rounded-md"
      >
        Check Availability
      </button>
    </div>
  </div>
</div>



      {/* Room Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {availableRooms.length > 0 ? (
          availableRooms.map((room, index) => (
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
              <p className="mb-1">Capacity: {room.capacity}</p>
              <p className="mb-4">Facilities: {room.facilities}</p>
              <Link to="/book-now">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary text-white py-2 px-4 rounded-md"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          ))
        ) : (
          rooms.map((room, index) => (
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
              <p className="mb-1">Capacity: {room.capacity}</p>
              <p className="mb-4">Facilities: {room.facilities}</p>
              <Link to="/book-now">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary text-white py-2 px-4 rounded-md"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Rooms;
