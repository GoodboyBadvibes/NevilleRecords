import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={false}
        navigation={false}
        modules={[EffectFlip, Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper z-0 h-0"
      >
        <SwiperSlide>
       <div className='object-fill w-full h-full '>
       <Image src={'/khaid2.jpg'} alt='artist'  className='object-fill w-full ' width={500} height={50} /> 
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khaid1.jpg'} alt='artist' className='object-fill w-full ' width={500} height={100} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khaid3.jpg'} alt='artist' className='object-fill w-full h-full ' width={500} height={100} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khaid4.webp'} alt='artist' className='object-fill w-full' width={500} height={100} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
