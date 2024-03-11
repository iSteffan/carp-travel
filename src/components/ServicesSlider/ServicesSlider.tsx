'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import clsx from 'clsx';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import './styles.css';

import ServiceCard from '../ServiceCard/ServiceCard';
import { servicesData } from '@/data/servicesData';
import Image from 'next/image';
import { ActiveBullet } from '@/assets/icons';

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
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={clsx(
              'flex items-center gap-[8px] w-[160px] text-start',
              index === activeIndex ? 'text-primary font-500' : 'text-inactive'
            )}
          >
            {index === activeIndex && (
              <Image src={ActiveBullet} alt="active slide pointer" width={6} height={6} />
            )}

            {item.btn}
          </button>
        ))}
      </div>
    </>
  );
};
