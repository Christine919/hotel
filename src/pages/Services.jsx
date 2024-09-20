import React from 'react';
import { motion } from 'framer-motion';
import SpaImage1 from '../assets/spa1.png';
import SpaImage2 from '../assets/spa2.png';
import DiningImage1 from '../assets/dining1.png';
import DiningImage2 from '../assets/dining2.png';
import DiningImage3 from '../assets/dining3.png';
import DiningImage4 from '../assets/dining4.png';
import DiningImage5 from '../assets/dining5.png';
import DiningImage6 from '../assets/dining6.png';
import DiningImage7 from '../assets/dining7.png';
import DiningImage8 from '../assets/dining8.png';
import BreakfastImage from '../assets/breakfast.png'; 
import Pool1Image from '../assets/pool1.png'; 
import Pool2Image from '../assets/pool2.png'; 
import LocalSight1Image from '../assets/sight1.png'; 
import LocalSight3Image from '../assets/sight3.png'; 
import LocalSight4Image from '../assets/sight4.png'; 
import LocalSight5Image from '../assets/sight5.png'; 

const Services = () => {

  return (
    <div className="bg-darkgrey text-lightgrey min-h-screen p-5 sm:p-10">
            {/* Section: Header */}
            <div className="p-4 bg-gradient-to-r from-[#190f2c] to-[#200b30]">
      <motion.div
        className="text-center mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Our Deluxe Services</h1>
        <p className="text-lg sm:text-xl">
          Experience the best we have to offer, from relaxing spa treatments to fine dining,
          and enjoy premium room service tailored to your needs.
        </p>
      </motion.div>
      <div className="grid grid-cols-auto-fit gap-4">
        <div className="flex justify-center items-center">
          <motion.img
            src={DiningImage7}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            src={DiningImage4}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <div className="flex justify-center items-center tall col-span-2">
          <motion.img
            src={SpaImage1}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="flex justify-center items-center wide col-span-3">
          <motion.img
            src={DiningImage6}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        {/* <div className="flex justify-center items-center">
          <motion.img
            src={DiningImage3}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
        <div className="flex justify-center items-center tall col-span-2">
          <motion.img
            src={DiningImage4}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div> */}
        <div className="flex justify-center items-center big col-span-2 row-span-2">
          <motion.img
            src={DiningImage5}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            src={DiningImage2}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
        <div className="flex justify-center items-center wide col-span-3">
          <motion.img
            src={Pool1Image}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </div>
        <div className="flex justify-center items-center big col-span-2 row-span-2">
          <motion.img
            src={BreakfastImage}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            src={DiningImage1}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            src={DiningImage8}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </div>
        {/* Move some images to column 3 - row 1, row 4, and row 6 */}
        <div className="flex justify-center items-center col-start-3 row-start-1">
          <motion.img
            src={DiningImage3}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          />
        </div>
        <div className="flex justify-center items-center col-start-3 row-start-4">
          <motion.img
            src={Pool2Image}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
        </div>
        <div className="flex justify-center items-center col-start-3 row-start-2">
          <motion.img
            src={SpaImage2}
            alt=""
            className="w-full h-auto object-cover rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </div>
      </div>
    </div>

      {/* Section: Services Information */}
      <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { title: "Spa & Wellness", description: "Indulge in a luxurious spa experience with a variety of treatments designed to help you unwind and rejuvenate. Our spa offers massages, facials, and more, ensuring you leave feeling revitalized." },
    { title: "Fine Dining", description: "Enjoy gourmet cuisine crafted by world-class chefs in our elegant dining room. Whether it's breakfast, lunch, or dinner, we offer a wide variety of exquisite dishes to satisfy your cravings." },
    { title: "Bar", description: "Unwind in our bar with a selection of fine wines, spirits, and signature cocktails. Enjoy a relaxed atmosphere perfect for socializing or unwinding after a long day." },
    { title: "Swimming Pool", description: "Take a refreshing dip in our stunning swimming pool, surrounded by luxurious cabanas and sun loungers, ideal for relaxation or family fun." },
  ].map((service, index) => (
    <motion.div 
      key={index} 
      className="p-6 bg-gray-800 rounded-lg shadow-lg"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
      <p className="text-lg">{service.description}</p>
    </motion.div>
  ))}
</div>

      {/* Section: Local Sights (Carousel of Images) */}
      <div>
        <div className="intro">
          <h1>Local Sights</h1>
          <p>Explore the beautiful sights around us. From historic landmarks to natural wonders, there's something for everyone to enjoy.</p>
        </div>
        <div className="gridywrap">
          <div className="gridy-2 gridyhe-1">
            <div className="gridimg" style={{backgroundImage:`url(${LocalSight5Image})`}}>&nbsp;</div>
            <div className="gridinfo">
              <h3>Historic Landmark</h3>
              <div className="gridmeta">
                <p className="gridwhen"><i className="fa fa-clock-o" /> 17:22 17th Feb 2015</p>
                <p className="gridwho"><i className="fa fa-user" /> Bruce Wayne</p>
              </div>
              <p className="gridexerpt">Discover the rich history of our area with this iconic landmark.</p>
              <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus" /></a>
            </div>
          </div>
          <div className="gridy-1 gridyhe-1">
            <div className="gridimg" style={{backgroundImage: `url(${LocalSight1Image})`}}>&nbsp;</div>
            <div className="gridinfo">
              <h3>City Park</h3>
              <div className="gridmeta">
                <p className="gridwhen"><i className="fa fa-clock-o" /> 17:22 17th Feb 2015</p>
                <p className="gridwho"><i className="fa fa-user" /> Harvey Dent</p>
              </div>
              <p className="gridexerpt">Relax and unwind in the green expanse of our city park.</p>
              <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus" /></a>
            </div>
          </div>
          <div className="gridy-1 gridyhe-2">
            <div className="gridimg" style={{backgroundImage: `url(${LocalSight3Image})`}}>&nbsp;</div>
            <div className="gridinfo">
              <h3>Winter Wonderland Ride</h3>
              <div className="gridmeta">
                <p className="gridwhen"><i className="fa fa-clock-o" /> 17:22 17th Feb 2015</p>
                <p className="gridwho"><i className="fa fa-user" /> Clark Kent</p>
              </div>
              <p className="gridexerpt">Soar through a breathtaking winter landscape on a scenic cable car journey.</p>
              <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus" /></a>
            </div>
          </div>
          <div className="gridy-2 gridyhe-1">
            <div className="gridimg" style={{backgroundImage: 'url(https://unsplash.imgix.net/uploads/1412862685615b0212e3d/5fcb0a55?q=75&fm=jpg&s=e003fb9a4e39e3c07e4a94f7e0ef3db8)'}}>&nbsp;</div>
            <div className="gridinfo">
              <h3>Natural Wonder</h3>
              <div className="gridmeta">
                <p className="gridwhen"><i className="fa fa-clock-o" /> 17:22 17th Feb 2015</p>
                <p className="gridwho"><i className="fa fa-user" /> Tony Stark</p>
              </div>
              <p className="gridexerpt">Breathtaking views and untouched beauty await at this natural wonder.</p>
              <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus" /></a>
            </div>
          </div>
          <div className="gridy-1 gridyhe-1">
            <div className="gridimg" style={{backgroundImage: 'url(https://ununsplash.imgix.net/photo-1418227165283-1595d13726cd?q=75&fm=jpg&s=cace1590a29be6d4d6db13c3ebd1ba72)'}}>&nbsp;</div>
            <div className="gridinfo">
              <h3>Mountain View</h3>
              <div className="gridmeta">
                <p className="gridwhen"><i className="fa fa-clock-o" /> 17:22 17th Feb 2015</p>
                <p className="gridwho"><i className="fa fa-user" /> Steve Rogers</p>
              </div>
              <p className="gridexerpt">Majestic mountain views provide a perfect escape from city life.</p>
              <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus" /></a>
            </div>
          </div>
          <div className="gridy-1 gridyhe-1">
            <div className="gridimg" style={{backgroundImage: `url(${LocalSight4Image})`}}>&nbsp;</div>
            <div className="gridinfo">
              <h3>Beachfront</h3>
              <div className="gridmeta">
                <p className="gridwhen"><i className="fa fa-clock-o" /> 17:22 17th Feb 2015</p>
                <p className="gridwho"><i className="fa fa-user" /> Natasha Romanoff</p>
              </div>
              <p className="gridexerpt">Soak up the sun and sea at the pristine beachfront.</p>
              <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
