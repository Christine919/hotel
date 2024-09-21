import React, { useState } from 'react';
import { motion } from 'framer-motion';

const roomData = {
  name: 'Deluxe Room',
  price: 350, // price per night
};

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    additionalServices: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotalPrice = () => {
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * roomData.price : 0; // Calculate total price
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1a1a] to-[#2b2b2b] text-lightgrey p-10 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full p-5">
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Customer Details
        </motion.h2>

        <motion.form
          className="bg-[#2f2f2f] rounded-lg shadow-lg p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name and Email in one line */}
          <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-lightgrey mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-lightgrey rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-lightgrey mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-lightgrey rounded-lg"
                required
              />
            </div>
          </div>

          {/* Address and Phone in one line */}
          <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-lightgrey mb-2" htmlFor="address">
                Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-lightgrey rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-lightgrey mb-2" htmlFor="phone">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-lightgrey rounded-lg"
                required
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="mb-6">
            <label className="block text-lightgrey mb-2" htmlFor="checkIn">
              Check-In Date:
            </label>
            <input
              type="date"
              name="checkIn"
              id="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full p-3 bg-[#1a1a1a] text-lightgrey rounded-lg"
              required
            />
          </div>

          {/* Check-out Date */}
          <div className="mb-6">
            <label className="block text-lightgrey mb-2" htmlFor="checkOut">
              Check-Out Date:
            </label>
            <input
              type="date"
              name="checkOut"
              id="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full p-3 bg-[#1a1a1a] text-lightgrey rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full p-3 bg-[#e67e22] rounded-lg text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Confirm Booking
          </motion.button>
        </motion.form>
      </div>

      {/* Room Details Section */}
      <div className="lg:w-1/2 w-full p-5">
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Room Details
        </motion.h2>

        <div className="bg-[#2f2f2f] rounded-lg shadow-lg p-5">
          <h3 className="text-2xl font-bold mb-2">{roomData.name}</h3>
          <p className="mb-2">Price per Night: ${roomData.price}</p>
          <p className="mb-2">Check-in: {formData.checkIn}</p>
          <p className="mb-2">Check-out: {formData.checkOut}</p>
          <p className="mb-2">Guests: {formData.guests}</p>
          <p className="mb-2">Additional Services: {formData.additionalServices}</p>

          {/* Total Price Calculation */}
          <h4 className="text-xl font-bold mt-4">Total Price: ${calculateTotalPrice()}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
