import React from 'react'
import './Hero.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='slide w-full min-h-screen '>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/s5mHg80/SPREADING-GOODNESS-WORLD.png" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/nQB6YGT/The-essence-of-tradition.png" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qDCqrSN/Tremendous-experience.png" alt="img" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero 