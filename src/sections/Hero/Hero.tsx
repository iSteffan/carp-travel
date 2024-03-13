import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <div
        className="grid grid-cols-1 gap-y-[24px] 
      md:grid-cols-[426px,230px] md:grid-rows-[88px,202px] md:gap-y-[56px] md:justify-between
      lg:w-[1280px] lg:mx-auto lg:px-[24px] lg:grid-cols-[646px,305px] lg:grid-rows-[123px,219px] lg:gap-y-[181px]"
      >
        <div
          className="relative flex flex-wrap ml-auto w-[118px] h-[52px] 
        md:col-start-2 md:col-end-3 md:w-[230px] md:h-[88px]
        lg:w-[305px] lg:h-[123px]"
        >
          <p className="text-[37px] md:text-[67px] lg:text-[98px]">
            7
            <span
              className="font-100 tracking-[1.665px] 
            md:tracking-[8.71px] 
            lg:tracking-normal lg:ml-[8px]"
            >
              DAYS
            </span>
          </p>
          <p
            className="absolute bottom-0 left-[2px] text-[12px] font-light tracking-[9.48px] 
          md:text-[14px] md:tracking-[25.9px]
          lg:text-[16px] lg:tracking-[36.48px]"
          >
            JOURNEY
          </p>
        </div>

        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
          <h1
            className="title smMax:max-w-[280px] mb-[24px]  
           md:mb-[68px]
          lg:mb-[144px]"
          >
            <span className="font-500">Uncover</span> Carpathian’s Secrets
          </h1>
          <p
            className="w-[157px] text-[10px] font-200 leading-[1.6] 
          md:w-[264px] md:text-[14px] md:leading-[1.14] md:tracking-[1.26px]
          lg:w-[608px] lg:text-[16px] lg:leading-[1.5] lg:tracking-[1.44px]"
          >
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>

        <div className="md:col-start-2 md:col-end-3">
          <p
            className="mb-[24px] text-[14px] font-200 leading-[1.43] text-justify 
          md:mb-[28px] md:text-[16px] md:leading-[1.25]
          lg:text-[18px] lg:leading-[1.33]"
          >
            We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
            stunning views, exciting expeditions, and the best service!
          </p>
          <a href="#contacts" className={css.button} aria-label="move to contact section">
            JOIN NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
