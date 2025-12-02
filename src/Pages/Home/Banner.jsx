import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <Swiper
       
         autoplay = {
           {
            delay:5000
           }
         }
         modules={[Autoplay]}
            className="mySwiper"
        > 
            {/* slide1 */}
            <SwiperSlide>
                <div className='relative'>
                <img className='object-cover brightness-50 h-screen w-full' src={slide1} alt="" />
                
                <h2 className='absolute mx-6 text-7xl flex items-center text-white inset-0'>Search, Report,
                    <span className='ml-5'>
                        <Typewriter
                        words={[' and Recover']}
                        loop={0}
                        typeSpeed={60}
                        delaySpeed={2000}
                        />  
                    </span>
                     </h2>
                </div>
            </SwiperSlide>


               {/* slide2 */}
            <SwiperSlide>
                <img className='h-screen object-cover brightness-50 w-full' src={slide2} alt="" />
                            <h2 className='absolute mx-6 text-7xl flex items-center text-white inset-0'>Bring Lost  
                    <span className='ml-5'>
                        <Typewriter
                        words={['Items Back Home']}
                        loop={0}
                        typeSpeed={60}
                        delaySpeed={2000}
                        />  
                    </span>
                     </h2>
            </SwiperSlide>


          {/* slide3 */}
            <SwiperSlide>
                <img className='h-screen object-cover brightness-50 w-full' src={slide3} alt="" />
                           <h2 className='absolute mx-6 text-7xl flex items-center text-white inset-0'>Your Lost  
                    <span className='ml-5'>
                        <Typewriter
                        words={['Item Might Be Here']}
                        loop={0}
                        typeSpeed={60}
                        delaySpeed={2000}
                        />  
                    </span>
                     </h2>
            </SwiperSlide>
              

              {/* slide4 */}
            <SwiperSlide>
                <img className='h-screen object-cover brightness-40 w-full' src={slide4} alt="" />
                            <h2 className='absolute mx-6 text-7xl  flex items-center text-white inset-0'>Make 
                    <span className='ml-5'>
                        <Typewriter
                        words={['Someone Happy']}
                        loop={0}
                        typeSpeed={60}
                        delaySpeed={2000}
                        />  
                    </span>
                     </h2>
            </SwiperSlide>

        </Swiper>
    );
};

export default Banner;