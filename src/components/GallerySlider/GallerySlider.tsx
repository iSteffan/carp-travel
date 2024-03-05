'use client';

import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GallerySlider1, GallerySlider2, GallerySlider3 } from '@/assets/images';
import { Navigation } from 'swiper/modules';
import { NavBtn } from './NavBtn';

export const GallerySlider = () => {
  return (
    <Swiper
      //   autoHeight={true}
      cssMode={true}
      slidesPerView={3}
      loop={true}
      navigation={true}
      centeredSlides={true}
      spaceBetween={24}
      modules={[Navigation]}
      className="mySwiper h-[307px]"
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
