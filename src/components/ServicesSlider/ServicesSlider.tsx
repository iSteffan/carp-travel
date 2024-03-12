'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import './styles.css';

import ServiceCard from '../ServiceCard';
import { servicesData } from '@/data/servicesData';

export const ServicesSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const handlePaginationClick = (index: number) => {
    if (swiper) {
      (swiper as any).slideTo(index);
      setActiveIndex(index);
    }
  };
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      onSwiper={s => setSwiper(s)}
      onSlideChange={s => setActiveIndex(s.activeIndex)}
      pagination={pagination}
      modules={[EffectFade, Pagination]}
      allowTouchMove={false}
      className="mySwiper service"
    >
      {servicesData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <ServiceCard data={item} activeIndex={activeIndex} onClick={handlePaginationClick} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
