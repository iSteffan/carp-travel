import css from './Career.module.css';

const Career = () => {
  return (
    <section className={css.section}>
      <div className="md:grid md:grid-cols-[211px,20px,127px,94px,21px,221px] md:grid-rows-[8px,73px,7px,5px,36px,56px,60px,32px,316px]">
        <h2 className="title mb-[24px] md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-2 md:mb-0">
          Choose <span className="font-medium">US</span>
        </h2>
        <p
          className="mb-[36px] ml-auto w-[179px] text-[14px] text-gray font-extralight leading-[1.43] 
        md:col-start-6 md:col-span-1 md:row-start-2 md:row-span-2 md:mb-0 md:w-full md:text-[13px] md:leading-[1.54]"
        >
          Your chance to join our passionate team in Carpathian tourism. Seeking talented
          professionals to share our common mission.
        </p>

        <p
          className="ml-auto mb-[36px] w-[179px] text-[30px] font-extralight
        md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-1 md:w-full md:m-0 md:text-right"
        >
          WHY US?
        </p>

        <ul
          className="list-none flex flex-col gap-[16px] mr-auto w-[181px] text-end 
        md:col-start-1 md:col-span-1 md:row-start-7 md:row-span-1 md:w-full md:gap-[24px]"
        >
          <li>
            <p className="mb-[8px] text-[14px] leading-[1.43] font-normal md:text-[16px] md:leading-[1.25]">
              Professional development
            </p>
            <p className="text-gray text-[12px] font-extralight leading-[1.67]">
              We offer growth opportunities and a creative environment to nurture your talents.
            </p>
          </li>
          <li>
            <p className="mb-[8px] text-[14px] leading-[1.43] font-normal">Teamwork</p>
            <p className="text-gray text-[12px] font-extralight leading-[1.67]">
              Join our close-knit family, where support and inspiration abound.
            </p>
          </li>
          <li>
            <p className="mb-[8px] text-[14px] leading-[1.43] font-normal md:mb-[28px]">
              Stimulating work environment
            </p>
            <p className="text-gray text-[12px] font-extralight leading-[1.67]">
              Flexibility and remote options for a comfortable experience.
            </p>
          </li>
          <li>
            <p className="mb-[8px] text-[14px] leading-[1.43] font-normal">Exciting challenges</p>
            <p className="text-gray text-[12px] font-extralight leading-[1.67]">
              Unleash your potential through unforgettable projects showcasing Carpathian beauty.
            </p>
          </li>
        </ul>
        <p
          className="max-md:hidden text-[13px] text-gray font-extralight leading-[1.54] 
        md:col-start-3 md:col-span-2 md:row-start-7 md:row-span-1"
        >
          Don't miss your opportunity! <br /> Fill out the form right now <br />
          and join our team!
        </p>
      </div>
    </section>
  );
};

export default Career;
