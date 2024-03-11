'use client';

import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { GallerySlider1, GallerySlider2, GallerySlider3 } from '@/assets/images';
import { NavBtn } from './NavBtn';

export const GallerySlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      loop={true}
      centeredSlides={true}
      className="mySwiper gallery"
    >
      <SwiperSlide>
        <div className="img-overlay">
          <Image src={GallerySlider1} alt="gallery slider image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-overlay">
          <Image src={GallerySlider2} alt="gallery slider image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-overlay">
          <Image src={GallerySlider3} alt="gallery slider image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-overlay">
          <Image src={GallerySlider2} alt="gallery slider image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-overlay">
          <Image src={GallerySlider3} alt="gallery slider image" />
        </div>
      </SwiperSlide>
      <NavBtn />
    </Swiper>
  );
};
