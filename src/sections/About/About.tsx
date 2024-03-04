import css from './About.module.css';

const About = () => {
  return (
    <section className={css.section}>
      <div>
        <h2 className="mb-[8px] text-[40px] font-thin leading-[1.4] tracking-[-1.6px]">
          WHO <span className="font-medium">WE ARE</span>
        </h2>

        <p className="mb-[20px] w-[180px] text-[14px] font-extralight leading-[1.43]">
          <span className="font-normal">a team of enthusiasts</span> who are fully committed to the
          mission of creating unforgettable and extraordinary trips to the most beautiful parts of
          the Carpathians. Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>

        <p className="mb-[40px] w-[180px] text-[14px] font-extralight leading-[1.43]">
          <span className="font-normal">We believe</span> that nature has the power to inspire,
          strengthen character and provide new perspectives. Therefore, each of our tours is aimed
          at unlocking your potential, enriching your spiritual world and creating unforgettable
          memories.
        </p>

        <div className="mb-[40px] ml-auto w-[180px]">
          <p className="text-[14px] font-normal leading-[1.43] uppercase">From vacationers</p>
          <p className="text-[14px] text-right font-normal leading-[1.43] uppercase">
            to active travelers
          </p>
          <p className="font-extralight tracking-[-0.14px]">we have a tour for everyone.</p>
        </div>

        <p className="text-[14px] font-extralight leading-[1.43]">
          <span className="font-normal">We use methods</span> that are time-tested and proven. Our
          expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through
          the mysteries of these mountains.
        </p>
      </div>
    </section>
  );
};

export default About;
