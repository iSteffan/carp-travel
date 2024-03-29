import { ServicesSlider } from '@/components/ServicesSlider/ServicesSlider';

const Services = () => {
  return (
    <section
      className="relative mx-auto max-w-[480px] md:max-w-[768px] lg:max-w-[1440px]"
      id="services"
    >
      <ServicesSlider />
    </section>
  );
};

export default Services;
