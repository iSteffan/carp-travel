import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css['grid-container']}>
        <div className="relative flex flex-wrap ml-auto mb-[24px] w-[118px] h-[52px]">
          <p className="text-[37px]">
            7<span className="font-thin tracking-[1.665px]">DAYS</span>
          </p>
          <p className="absolute bottom-0 left-[2px] text-[12px] font-light tracking-[9.48px]">
            JOURNEY
          </p>
        </div>

        <div className="mb-[24px]">
          <h1 className="mb-[24px] text-[40px] leading-[1.4] tracking-[-1.6px] uppercase">
            Uncover <span className="font-thin">Carpathian’s Secrets</span>
          </h1>
          <p className="w-[157px] text-[10px] font-extralight leading-[1.6]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>

        <div>
          <p className="mb-[24px] text-[14px] font-extralight leading-[1.43] text-justify">
            We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
            stunning views, exciting expeditions, and the best service!
          </p>
          <button type="button" className={css.button}>
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
