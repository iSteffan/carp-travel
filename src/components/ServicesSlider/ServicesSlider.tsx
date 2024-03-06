'use client';

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';

import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { EffectFade, Pagination } from 'swiper/modules';
import { servicesData } from '@/data/servicesData';

export const ServicesSlider = () => {
  return (
    <Swiper
      //   cssMode={true}
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Pagination]}
      className="mySwiper service"
    >
      {servicesData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <ServiceCard data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
