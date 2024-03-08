import css from './About.module.css';

const About = () => {
  return (
    <section className={css.section} id="about">
      <div
        className=" md:grid md:grid-cols-[221px,20px,167px,76px,220px] md:grid-rows-[9px,72px,168px,16px,120px,60px,64px,60px] 
        lg:mx-auto lg:px-[24px] lg:w-[1280px] lg:grid-cols-[606px,24px,292px,14px,297px] lg:grid-rows-[16px,104px,136px,24px,192px,72px,72px]"
      >
        <h2
          className="title mb-[8px]
         md:mb-0 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3  
         lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 "
        >
          WHO <span className="font-medium">WE ARE</span>
        </h2>

        <p
          className="text-gray mb-[20px] w-[180px] text-[14px] font-extralight leading-[1.43] 
        md:mb-0 md:col-start-5 md:col-end-6 md:row-start-2 md:row-end-4 md:w-full md:text-[16px] md:leading-[1.25] 
        lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4 lg:text-[18px] lg:leading-[1.33]"
        >
          <span className="font-normal">a team of enthusiasts</span> who are fully committed to the
          mission of creating unforgettable and extraordinary trips to the most beautiful parts of
          the Carpathians. Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>

        <p
          className="text-gray mb-[40px] w-[180px] text-[14px] font-extralight leading-[1.43] 
        md:mb-0 md:col-start-5 md:col-end-6 md:row-start-5 md:row-end-7 md:w-full md:text-[16px] md:leading-[1.25] 
        lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-6 lg:text-[18px] lg:leading-[1.33]"
        >
          <span className="font-normal">We believe</span> that nature has the power to inspire,
          strengthen character and provide new perspectives. Therefore, each of our tours is aimed
          at unlocking your potential, enriching your spiritual world and creating unforgettable
          memories.
        </p>

        <div
          className="mb-[40px] ml-auto w-[180px] 
        md:col-start-1 md:col-end-2 md:row-start-6 md:row-end-7 md:ml-0 md:mb-0 md:w-full 
        lg:col-start-5 lg:col-end-6 lg:row-start-7 lg:row-end-8"
        >
          <p
            className="text-[14px] font-normal leading-[1.43] uppercase 
          md:text-[16px] md:leading-[1.25]
          lg:text-[18px] lg:leading-[1.33]"
          >
            From vacationers
          </p>
          <p
            className="text-[14px] text-right font-normal leading-[1.43] uppercase 
          md:text-[16px] md:leading-[1.25] 
          lg:text-[18px] lg:leading-[1.33]"
          >
            to active travelers
          </p>
          <p
            className="text-gray font-extralight tracking-[-0.14px] 
          md:text-[16px] md:leading-[1.25] md:tracking-[0.32px] 
          lg:text-[18px] lg:leading-[1.33] lg:tracking-[2.16px]"
          >
            we have a tour for everyone.
          </p>
        </div>

        <p
          className="text-gray text-[14px] font-extralight leading-[1.43] 
        md:col-start-3 md:col-end-6 md:row-start-8 md:row-end-9 md:text-[16px] md:leading-[1.25] 
        lg:col-start-1 lg:col-end-2 lg:row-start-7 lg:row-end-8 lg:text-[18px] lg:leading-[1.33]"
        >
          <span className="font-normal">We use methods</span> that are time-tested and proven. Our
          expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through
          the mysteries of these mountains.
        </p>
      </div>
    </section>
  );
};

export default About;
