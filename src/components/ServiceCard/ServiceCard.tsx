import { Services1 } from '@/assets/images';
import Image from 'next/image';

const ServiceCard = ({ data }) => {
  return (
    <div className="w-full pt-[54px] px-[20px] pb-[56px] grid grid-cols-1 grid-rows-[56px,24px,52px,16px,213px,12px,24px,24px,166px,34px,120px]">
      <h2
        className="row-start-1 row-end-2 text-[40px] font-thin leading-[1.4] tracking-[-1.6px] 
      md:text-[67px] md:leading-normal md:tracking-[-2.68px]
      lg:text-[98px] lg:tracking-[-3.92px]"
      >
        WE <span className="font-medium">OFFER</span>
      </h2>
      <p className="text-[43px] font-thin text-end row-start-3 row-end-4">
        01/<span className="text-secondary-white">05</span>
      </p>

      <Image
        src={Services1}
        alt="image"
        width={280}
        className="row-start-5 row-end-6 object-cover h-full"
      />

      <p className="row-start-7 row-end-8 text-end text-[12px] text-gray font-extralight leading-[2] tracking-[2.4px]">
        Feel the adrenaline rush
      </p>
      <p className="row-start-11 row-end-12 text-[14px] text-gray font-extralight leading-[1.43]">
        Join exciting rafting expeditions on the waterways of the Carpathians. Go through
        challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the
        incredible views of the surrounding mountains.
      </p>
    </div>
  );
};

export default ServiceCard;
