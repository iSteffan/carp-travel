import CareerForm from '@/components/CareerForm/CareerForm';
import css from './CareerMobileFormSection.module.css';

const CareerMobileFormSection = () => {
  return (
    <section className={css.section}>
      <div className="">
        <p className="ml-auto mb-[24px] w-[179px] text-[14px] font-200 leading-[1.43]">
          Don&rsquo;t miss your opportunity! <br /> Fill out the form right now <br />
          and join our team!
        </p>
        <CareerForm />
      </div>
    </section>
  );
};

export default CareerMobileFormSection;
