import css from './Gallery.module.css';
import { GallerySlider } from '@/components/GallerySlider/GallerySlider';
import GalleryMobilePhotoList from '@/components/GalleryMobilePhotoList';

const Gallery = () => {
  return (
    <section className={css.section} id="gallery">
      <div className="lg:w-[1280px] lg:mx-auto">
        <h2
          className="title mb-[24px] 
        md:mb-[66px] md:w-[464px] md:mx-auto  
        lg:mb-[15px] lg:w-[633px] lg:ml-[23px] "
        >
          OUR <span className="font-500">GALLERY</span>
        </h2>

        <GalleryMobilePhotoList />

        <div className="smMax:hidden">
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
