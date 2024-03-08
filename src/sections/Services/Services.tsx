import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { ServicesSlider } from '@/components/ServicesSlider/ServicesSlider';

const Services = () => {
  return (
    <section className="bg-green mx-auto max-w-[480px]" id="services">
      <ServicesSlider />
      {/* <ServiceCard /> */}
    </section>
  );
};

export default Services;
