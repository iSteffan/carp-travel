import Image from 'next/image';
import { GallerySlider1, GallerySlider2, GallerySlider3 } from '@/assets/images';

const GalleryMobilePhoto = () => {
  return (
    <div className="md:hidden">
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
  );
};

export default GalleryMobilePhoto;
