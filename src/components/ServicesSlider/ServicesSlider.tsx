'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';

import './styles.css';

import ServiceCard from '../ServiceCard/ServiceCard';
import { servicesData } from '@/data/servicesData';

export const ServicesSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const handlePaginationClick = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
      setActiveIndex(index);
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        onSwiper={s => setSwiper(s)}
        onSlideChange={s => setActiveIndex(s.activeIndex)}
        pagination={pagination}
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
      <div className="flex flex-col gap-[16px] absolute top-[475px] left-[20px] z-10 text-[20px] font-200 uppercase leading-[0.85]">
        {servicesData.map((item, index) => (
          <span
            key={index}
            onClick={() => handlePaginationClick(index)}
            // {index === activeIndex ? 'text-gray' : 'text-inactive'}
            className={
              index === activeIndex ? 'text-primary font-500 w-[200px]' : 'text-inactive w-[200px]'
            }
          >
            {item.btn}
          </span>
        ))}
      </div>
    </>
  );
};
