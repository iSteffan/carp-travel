import { useSwiper } from 'swiper/react';

export const NavBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-0 z-10">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        //   aria-label="Move to the previous slide"
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        //   aria-label="Move to the next slide"
      >
        NEXT
      </button>
    </div>
  );
};
