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
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
          <Image src={'/khalbum0.jpg'} alt='artist' className='object-fill w-full' width={500} height={100} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khalbum1.jpg'} alt='artist' className='object-fill w-full ' width={500} height={100} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khalbum2.jpg'} alt='artist' className='object-fill w-full ' width={500} height={100} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khalbum3.webp'} alt='artist' className='object-fill w-full  ' width={500} height={100} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/khalbum4.jpg'} alt='artist' className='object-fill w-full  ' width={500} height={100} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
