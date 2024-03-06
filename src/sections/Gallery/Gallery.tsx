import css from './Gallery.module.css';
import { GallerySlider } from '@/components/GallerySlider/GallerySlider';
import GalleryMobilePhoto from '@/components/GalleryMobilePhoto';

const Gallery = () => {
  return (
    <section className={css.section}>
      <div className="lg:w-[1280px] lg:mx-auto">
        <h2
          className="mb-[24px] font-thin text-[40px] leading-[1.4] tracking-[-1.6px] 
        md:mb-[66px] md:w-[464px] md:mx-auto md:text-[67px] md:leading-normal md:tracking-[-2.68px] 
        lg:mb-[15px] lg:w-[633px] lg:ml-[23px] lg:text-[98px] lg:tracking-[-3.92px]"
        >
          OUR <span className="font-medium">GALLERY</span>
        </h2>

        <GalleryMobilePhoto />

        <div className="max-md:hidden">
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
