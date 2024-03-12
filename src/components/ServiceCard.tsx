import Image from 'next/image';
import clsx from 'clsx';
import { servicesData } from '@/data/servicesData';
import { ActiveBullet } from '@/assets/icons';

export interface ServiceCardProps {
  data: {
    img: string;
    bg: string;
    desc: string;
    alt: string;
    call: string;
    id: number;
  };
  activeIndex: number;
  onClick: (index: number) => void;
}

const ServiceCard = ({ data, activeIndex, onClick }: ServiceCardProps) => {
  return (
    <div
      className="w-full lg:max-w-[1440px] "
      style={{
        background: `linear-gradient(rgba(2, 15, 8, 0.85), rgba(2, 15, 8, 0.5)), url(${data.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="pt-[54px] px-[20px] pb-[56px] grid grid-cols-1 grid-rows-[56px,24px,52px,16px,213px,12px,24px,24px,166px,34px,120px] bg-no-repeat bg-cover bg-center
      md:grid-cols-[463px,20px,221px] md:grid-rows-[78px,4px,36px,172px,25px,24px,34px,115px,5px] md:py-[64px] md:px-[32px] 
      lg:relative lg:w-[1280px] lg:px-[24px] lg:py-[104px] lg:mx-auto lg:grid-cols-[607px,20px,252px,60px,293px] lg:grid-rows-[119px,20px,24px,24px,24px,24px,48px,24px,24px,24px,24px,23px,168px]"
      >
        <h2
          className="row-start-1 row-end-2 text-[40px] font-100 leading-[1.4] tracking-[-1.6px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 md:text-[67px] md:leading-normal md:tracking-[-2.68px]
      lg:text-[98px] lg:tracking-[-3.92px] lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1"
        >
          WE <span className="font-500">OFFER</span>
        </h2>
        <p
          className="text-[43px] font-100 text-end row-start-3 row-end-4 
      md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1 md:text-[67px] md:leading-[1.16] md:text-left
      lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1 lg:text-[98px] lg:leading-normal"
        >
          0{data.id}/<span className="text-secondary-white">05</span>
        </p>

        <Image
          src={data.img}
          alt="image"
          width={280}
          height={213}
          className="row-start-5 row-end-6 object-cover h-full w-full 
        md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-5 
        lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-11"
        />

        <p
          className={clsx(
            'row-start-7 row-end-8 text-end text-[12px] font-200 leading-[2] tracking-[2.4px] md:col-start-3 md:col-span-1 md:row-start-6 md:row-span-1 md:text-left lg:mt-[-5px] lg:col-start-5 lg:col-span-1 lg:text-start',
            activeIndex === 0 && 'lg:row-start-3 lg:row-span-1',
            activeIndex === 1 && 'lg:row-start-5 lg:row-span-1',
            activeIndex === 2 && 'lg:row-start-7 lg:row-span-1',
            activeIndex === 3 && 'lg:row-start-9 lg:row-span-1',
            activeIndex === 4 && 'lg:row-start-11 lg:row-span-1'
          )}
        >
          {data.call}
        </p>
        <p
          className="mt-auto row-start-11 row-end-12 text-[14px] font-200 leading-[1.43] 
      md:col-start-3 md:col-span-1 md:row-start-8 md:row-span-2 md:text-[13px] md:leading-[1.54] md:text-justify
      lg:col-start-5 lg:col-span-1 lg:row-start-13 lg:row-span-1 lg:text-[18px] lg:leading-[1.33]"
        >
          {data.desc}
        </p>

        <div
          className="row-start-9 row-end-10 flex flex-col gap-[16px] w-[190px] text-[20px] font-200 uppercase leading-[0.85]
          md:col-start-3 md:col-span-1 md:row-start-4 md:row-span-1 md:text-[22px] md:leading-[0.81] md:w-[200px] 
          lg:gap-[24px] lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-9 lg:text-[28px] lg:leading-[0.85] lg:w-full"
        >
          {servicesData.map((item, index) => (
            <button
              key={index}
              onClick={() => onClick(index)}
              className={clsx(
                'flex items-center gap-[8px] text-start uppercase',
                index === activeIndex ? 'text-primary font-500' : 'text-inactive'
              )}
            >
              {index === activeIndex && (
                <Image src={ActiveBullet} alt="active slide pointer" width={6} height={6} />
              )}

              {item.btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
