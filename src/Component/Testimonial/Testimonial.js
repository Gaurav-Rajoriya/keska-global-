import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


const Testimonial = () => {
  return (
    <div className='testimonial-container p-10'>
        <h2>What Our Client Says <hr/></h2>
        <div className='testimonial'>
        <Swiper
    slidesPerView={2}
    spaceBetween={30}
    freeMode={true}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        // when window width is >= 320px
        320: {
            width: 250,
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            width: 640,
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            width: 1000,
            slidesPerView: 2,
        },
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
>

        <SwiperSlide>
            <div className='client'>
               
                <div className='client-text'>
                    <p>
                    Keska Global Trade's spices exceeded my expectations! The
                      rich, vibrant flavors elevated my dishes to a whole new
                      level. Exceptional quality and a must-have for every
                      culinary enthusiast!</p>
                    <h2>Ramesh <span> Kumar</span></h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
              
                <div className='client-text'>
                    <p>
                    Keska Global Trade's spices are a culinary revelation!
                      Elevating my dishes with their exquisite flavors, these
                      premium ingredients have become an essential in my kitchen.
                      A top-notch choice for anyone seeking a gourmet touch to
                      their cooking journey!</p>
                    <h2>Saniya<span> Parjapati</span></h2>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='client'>
                {/* <div className='client-img'>
                    <img  src="https://img.freepik.com/free-photo/indian-business-man-with-crossed-hands-posing-isolated-white-wall_231208-2626.jpg?size=626&ext=jpg&uid=R134274668&ga=GA1.1.229895539.1703719784&semt=ais" alt="img" />
                </div> */}
                <div className='client-text'>
                    <p>
                    Indulging in Keska Global Trade's spices was a game-changer
                      for my kitchen. The unparalleled richness and depth of
                      flavor transformed ordinary meals into extraordinary
                      culinary experiences. Undoubtedly, a premium choice for
                      discerning taste enthusiasts!</p>
                    <h2>Rohan <span> Mishra</span></h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                {/* <div className='client-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmT1nrdZR46G1oD6xaH9S_Ky9c8tIMOTXVWQ&usqp=CAU" alt="img" />
                </div> */}
                <div className='client-text'>
                    <p>
                    Indulging in Keska Global Trade's spices was a game-changer
                      for my kitchen. The unparalleled richness and depth of
                      flavor transformed ordinary meals into extraordinary
                      culinary experiences. Undoubtedly, a premium choice for
                      discerning taste enthusiasts!</p>
                    <h2>Ram Kishan </h2>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Testimonial