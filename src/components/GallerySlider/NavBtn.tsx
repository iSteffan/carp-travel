import { useSwiper } from 'swiper/react';

export const NavBtn = () => {
  const swiper = useSwiper();

  return (
    <div
      className="absolute bottom-[17px] left-[37px] z-10 w-[629px] flex justify-between 
    lg:bottom-[-4px] lg:left-[228px] lg:w-[821px]"
    >
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="text-[33px] font-100"
        //   aria-label="Move to the previous slide"
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="text-[33px] font-100"

        //   aria-label="Move to the next slide"
      >
        NEXT
      </button>
    </div>
  );
};
