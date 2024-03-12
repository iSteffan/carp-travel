'use client';

import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { NavBtn } from './NavBtn';
import { galleryData } from '@/data/galleryData';

export const GallerySlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      initialSlide={1}
      centeredSlides={true}
      grabCursor={true}
      breakpoints={{
        320: {
          loop: false,
        },
        768: {
          loop: true,
        },
      }}
      className="mySwiper gallery"
    >
      {galleryData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="img-overlay">
              <Image
                src={item.img}
                alt={item.alt}
                width={415}
                height={294}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        );
      })}

      <NavBtn />
    </Swiper>
  );
};
