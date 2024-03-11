import Image from 'next/image';

export interface ServiceCardProps {
  data: {
    img: string;
    bg: string;
    desc: string;
    alt: string;
    call: string;
    id: number;
  };
}
const ServiceCard = ({ data }: ServiceCardProps) => {
  return (
    <div
      className="w-full pt-[54px] px-[20px] pb-[56px] grid grid-cols-1 grid-rows-[56px,24px,52px,16px,213px,12px,24px,24px,166px,34px,120px] bg-no-repeat bg-cover bg-center
      md:grid-cols-[463px,20px,221px] md:grid-rows-[78px,4px,36px,172px,25px,24px,34px,115px,5px]"
      style={{
        background: `linear-gradient(rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.5)), url(${data.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h2
        className="row-start-1 row-end-2 text-[40px] font-100 leading-[1.4] tracking-[-1.6px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 md:text-[67px] md:leading-normal md:tracking-[-2.68px]
      lg:text-[98px] lg:tracking-[-3.92px]"
      >
        WE <span className="font-500">OFFER</span>
      </h2>
      <p
        className="text-[43px] font-100 text-end row-start-3 row-end-4 
      md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1 md:text-[67px] md:leading-[1.16] md:text-left"
      >
        0{data.id}/<span className="text-secondary-white">05</span>
      </p>

      <Image
        src={data.img}
        alt="image"
        width={280}
        height={213}
        className="row-start-5 row-end-6 object-cover h-full w-full 
        md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-5"
      />

      <p
        className="row-start-7 row-end-8 text-end text-[12px] text-gray font-200 leading-[2] tracking-[2.4px] 
      md:col-start-3 md:col-span-1 md:row-start-6 md:row-span-1 md:text-left"
      >
        {data.call}
      </p>
      <p
        className="row-start-11 row-end-12 text-[14px] text-gray font-200 leading-[1.43] 
      md:col-start-3 md:col-span-1 md:row-start-8 md:row-span-2 md:text-[13px] md:leading-[1.54] md:text-justify"
      >
        {data.desc}
      </p>
    </div>
  );
};

export default ServiceCard;
