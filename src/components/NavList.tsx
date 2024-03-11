import Link from 'next/link';

export const NavList = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-[24px] lg:gap-[56px]">
        <li>
          <Link
            href="#about"
            aria-label="Move to about section"
            className="tracking-[1.4px] font-400 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            aria-label="Move to services section"
            className="tracking-[1.4px] font-400 hover:underline"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#career"
            aria-label="Move to career section"
            className="tracking-[1.4px] font-400 hover:underline"
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            href="#gallery"
            aria-label="Move to gallery section"
            className="tracking-[1.4px] font-400 hover:underline"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="#contacts"
            aria-label="Move to contacts section"
            className="tracking-[1.4px] font-400 hover:underline"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
