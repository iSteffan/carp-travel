'use client';

// import 'swiper/css/pagination';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import React, { useRef } from 'react';

// import './styles.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from '../ServiceCard/ServiceCard';
// import { EffectFade, Pagination } from 'swiper/modules';
import { servicesData } from '@/data/servicesData';

// export const ServicesSlider = () => {
//   const swiperRef = useRef(null);

//   //   const handleSlideChange = index => {
//   //     if (swiperRef.current) {
//   //       swiperRef.current.slideTo(index);
//   //     }
//   //   };

//   return (
//     <Swiper
//       //   cssMode={true}
//       spaceBetween={30}
//       effect={'fade'}
//       navigation={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[EffectFade, Pagination]}
//       className="mySwiper service"
//     >
//       {servicesData.map((item, index) => {
//         return (
//           <SwiperSlide key={index}>
//             <ServiceCard data={item} />
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

export const ServicesSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const slideTo = index => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, EffectFade, Pagination]}
        onSwiper={setSwiperRef}
        effect={'fade'}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        virtual
        className="mySwiper service"
      >
        {servicesData.map((item, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              <ServiceCard data={item} />
            </SwiperSlide>
          );
        })}
        {/* {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))} */}
      </Swiper>

      <button onClick={() => slideTo(1)}>Slide 1</button>
      <button onClick={() => slideTo(2)}>Slide 2</button>
      <button onClick={() => slideTo(3)}>Slide 3</button>
      <button onClick={() => slideTo(4)}>Slide 4</button>
      <button onClick={() => slideTo(5)}>Slide 5</button>
    </>
  );
};
