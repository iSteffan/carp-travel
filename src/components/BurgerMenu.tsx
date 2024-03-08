export interface BurgerMenuProps {
  onClose: (event: React.SyntheticEvent<Element, Event>) => void;
  anchor: string;
}

const BurgerMenu = ({ onClose }: BurgerMenuProps) => {
  return (
    <div className="max-w-[480px] w-full mx-auto pt-[43px] px-[20px] text-end">
      <button
        type="button"
        className="mb-[110px] ml-auto text-primary font-serif p-0 h-[17px] hover:underline font-400"
        onClick={onClose}
      >
        CLOSE
      </button>
      <ul className="flex flex-col gap-[48px] items-center text-[18px] text-primary font-400 tracking-[1.8px]">
        <li>
          <a
            href="#about"
            onClick={onClose}
            aria-label="Move to about section"
            className="hover:underline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={onClose}
            aria-label="Move to services section"
            className="hover:underline"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#career"
            onClick={onClose}
            aria-label="Move to career section"
            className="hover:underline"
          >
            Career
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            onClick={onClose}
            aria-label="Move to gallery section"
            className="hover:underline"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={onClose}
            aria-label="Move to contacts section"
            className="hover:underline"
          >
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
