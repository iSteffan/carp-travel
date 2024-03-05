import css from './Gallery.module.css';
import Image from 'next/image';
import { GallerySlider1, GallerySlider2, GallerySlider3 } from '@/assets/images';

const Gallery = () => {
  return (
    <section className={css.section}>
      <div className="lg:w-[1280px]">
        <h2
          className="mb-[24px] font-thin text-[40px] leading-[1.4] tracking-[-1.6px] 
        md:mb-[66px] md:text-[67px] md:leading-normal md:tracking-[-2.68px] 
        lg:mb-[15px] lg:text-[98px] lg:tracking-[-3.92px]"
        >
          OUR <span className="font-medium">GALLERY</span>
        </h2>

        <div>
          <ul className="flex flex-col gap-[22px]">
            <li>
              <Image
                src={GallerySlider1}
                alt="gallery slider image"
                width={0}
                height={0}
                className="w-full"
              />
            </li>
            <li>
              <Image
                src={GallerySlider2}
                alt="gallery slider image"
                width={0}
                height={0}
                className="w-full"
              />
            </li>
            <li>
              <Image
                src={GallerySlider3}
                alt="gallery slider image"
                width={0}
                height={0}
                className="w-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
