import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/assets/icons/';
import { NavList } from '@/components/NavList';

const Header = () => {
  return (
    <header>
      <div
        className="flex justify-between items-center px-[20px] pt-[36px] mx-auto max-w-[480px] 
        md:w-[768px] md:max-w-full md:pt-[24px] md:px-[32px] 
        lg:w-[1235px] lg:max-w-full lg:px-0"
      >
        <Link href="./">
          <Image
            src={logo}
            alt="logo"
            height={33}
            width={61}
            priority={true}
            style={{ width: '61px', height: '33px' }}
          />
        </Link>

        <NavList />

        <button
          type="button"
          className="font-serif p-0 h-[17px] hover:border-b-4 font-normal md:hidden"
        >
          MENU
        </button>
      </div>
    </header>
  );
};

export default Header;
