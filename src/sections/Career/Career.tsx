import css from './Career.module.css';

const Career = () => {
  return (
    <section className={css.section}>
      <h2 className="title mb-[24px]">
        Choose <span className="font-medium">US</span>
      </h2>
      <p className="mb-[36px] ml-auto w-[179px] text-[14px] text-gray text-gray font-extralight leading-[1.43]">
        Your chance to join our passionate team in Carpathian tourism. Seeking talented
        professionals to share our common mission.
      </p>

      <p className="ml-auto mb-[36px] w-[179px] text-[30px] font-extralight">WHY US?</p>

      <ul className="list-none flex flex-col gap-[16px] mr-auto w-[181px] text-end">
        <li>
          <p className="mb-[8px] text-[14px] leading-[1.43] font-normal">
            Professional development
          </p>
          <p className="text-[12px] font-extralight leading-[1.67]">
            We offer growth opportunities and a creative environment to nurture your talents.
          </p>
        </li>
        <li>
          <p className="mb-[8px] text-[14px] leading-[1.43] font-normal">Teamwork</p>
          <p className="text-[12px] font-extralight leading-[1.67]">
            Join our close-knit family, where support and inspiration abound.
          </p>
        </li>
        <li>
          <p className="mb-[8px] text-[14px] leading-[1.43] font-normal">
            Stimulating work environment
          </p>
          <p className="text-[12px] font-extralight leading-[1.67]">
            Flexibility and remote options for a comfortable experience.
          </p>
        </li>
        <li>
          <p className="mb-[8px] text-[14px] leading-[1.43] font-normal">Exciting challenges</p>
          <p className="text-[12px] font-extralight leading-[1.67]">
            Unleash your potential through unforgettable projects showcasing Carpathian beauty.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Career;
