'use client';

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { GallerySlider1, GallerySlider2, GallerySlider3 } from '@/assets/images';

import Image from 'next/image';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { EffectFade, Pagination } from 'swiper/modules';

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
      className="mySwiper"
      //   autoHeight={true}
      //   slidesPerView={1}
      //   cssMode={true}
      //   spaceBetween={30}
      //   effect={'fade'}
      //   centeredSlides={true}
      //   pagination={{
      //     clickable: true,
      //   }}
      //   modules={[EffectFade, Pagination]}
      //   className="mySwiper"
    >
      {/* {galleryData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="img-overlay">
              <Image
                fill={true}
                src={item.img}
                alt="gallery slider image"
                width={0}
                height={0}
                className="w-auto h-auto"
              />
            </div>
          </SwiperSlide>
        );
      })} */}
      {/* <SwiperSlide>
        <ServiceCard />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image src={GallerySlider1} alt="gallery slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={GallerySlider2} alt="gallery slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={GallerySlider3} alt="gallery slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={GallerySlider2} alt="gallery slider image" />
      </SwiperSlide>
    </Swiper>
  );
};
