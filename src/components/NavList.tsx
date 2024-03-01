import Link from 'next/link';

export const NavList = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-[24px] lg:gap-[56px]">
        <li>
          <Link href="#about" aria-label="Move to about section" className="font-normal">
            About
          </Link>
        </li>
        <li>
          <Link href="#services" aria-label="Move to services section" className="font-normal">
            Services
          </Link>
        </li>
        <li>
          <Link href="#career" aria-label="Move to career section" className="font-normal">
            Career
          </Link>
        </li>
        <li>
          <Link href="#gallery" aria-label="Move to gallery section" className="font-normal">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="#contacts" aria-label="Move to contacts section" className="font-normal">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
