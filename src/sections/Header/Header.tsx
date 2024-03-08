'use client';

import Image from 'next/image';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';

import { logo } from '@/assets/icons/';
import { NavList } from '@/components/NavList';
import { useState, SyntheticEvent, KeyboardEvent } from 'react';
import BurgerMenu from '@/components/BurgerMenu';

const Header = () => {
  // ---------------------------------------------------------------------------------MUI-DRAWER
  const [state, setState] = useState({
    openBurgerMenu: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: SyntheticEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    // ---------------------------------------------------------------------------------
  };
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
          className="font-serif p-0 h-[17px] hover:underline font-normal md:hidden"
          onClick={toggleDrawer('openBurgerMenu', true)}
        >
          MENU
        </button>
      </div>
      <Drawer
        className="mui-fixed"
        anchor="right"
        open={state['openBurgerMenu']}
        onClose={toggleDrawer('openBurgerMenu', false)}
        hideBackdrop={true}
        sx={{
          position: 'fixed',
          '& .MuiDrawer-paper': {
            position: 'relative',
            background: 'rgba(1, 10, 5, 0.75)',
            backdropFilter: 'blur(25px)',
          },
        }}
      >
        <BurgerMenu anchor="openBurgerMenu" onClose={toggleDrawer('openBurgerMenu', false)} />
      </Drawer>
    </header>
  );
};

export default Header;
