import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaHome } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide2.jpg';
import img3 from '../assets/slide3.jpg'

const HowItWork = () => {


    return (

 <div className="my-36 mx-10 text-center">
      <h2 className="text-4xl text-gray-600 font-semibold mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-12">

        {/* card1 */}
        
        <Fade
        direction='left'
        >
          <motion.div
            className=" relative group overflow-hidden px-8 py-12 bg-white shadow-lg rounded-lg"

            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
              <div
    className="absolute inset-0 bg-cover bg-center blur-md scale-110"
    style={{ backgroundImage: `url(${img1})` }}
  ></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4 text-center">
            <FaSearch size={40} className="text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Search Lost Items</h3>
            <p className="text-gray-100 group-hover:text-primary transition-colors duration-200">Quickly search for lost items reported by other users in your area.</p>
             </div>
   
          </motion.div>
        </Fade>


        {/* card2 */}
        <Fade
        direction='up'
        >
          <motion.div
            className="relative group overflow-hidden px-8 py-12 shadow-lg rounded-lg"
            transition={{ duration: 0.6}}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
        <div
    className="absolute inset-0 bg-cover bg-center blur-md scale-110"
    style={{ backgroundImage: `url(${img2})` }}
  ></div>
   <div className='relative p-4 h-full z-10 text-center flex flex-col justify-center items-center'>
            <FaBullhorn size={40} className="text-primary mb-4"/>
            <h3 className="text-2xl font-semibold mb-4 text-white">Report Lost Items</h3>
            <p className="text-gray-100 group-hover:text-primary transition-colors duration-200">Post lost or found items with all details including photos and location.</p>
            </div>
           
          </motion.div>
        </Fade>


        
        {/* card-3 */}
        <Fade
        direction='right'
        >

          <motion.div 
          className='relative group overflow-hidden px-8 py-12 shadow-lg rounded-lg'
          transition ={{duration:0.6}}
          whileHover={{scale:1.05,transition:{duration:0.3}}}
          >
            
            <div
            className='absolute inset-0 bg-cover bg-center blur-md scale-110'
            style={{ backgroundImage: `url(${img3})`}}
            ></div>
          <div className='relative z-10 p-4 flex flex-col text-center items-center justify-center h-full'>
              <FaHome size={40} className="text-primary mb-4" />
              <h3 className='text-2xl font-semibold mb-4 text-white'>Recover Items</h3>
              <p className='text-gray-100 px-1 group-hover:text-primary transition-colors duration-200'>Connect with the owner or finder to safely recover the lost item.</p>
          </div>
          </motion.div>
        </Fade>

      </div>
    </div>
    );
};

export default HowItWork;