import { useSwiper } from 'swiper/react';

export const NavBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-[17px] left-[37px] z-10 w-[629px] flex justify-between">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="text-[33px] font-thin"
        //   aria-label="Move to the previous slide"
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="text-[33px] font-thin"

        //   aria-label="Move to the next slide"
      >
        NEXT
      </button>
    </div>
  );
};
