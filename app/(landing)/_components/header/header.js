'use client';
import React, { useState, useEffect } from 'react';
import Logo from '@/components/logo';
import HeaderLinks from './header-links';
import AuthLinks from './auth-links';
import MobileMenu from './mobile-menu';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-20 w-full  fixed top-0 left-0 transition-all duration-300 ${
        isAtTop ? 'bg-white border-b-2 border-slate-200' : 'bg-transparent'
      }`}
    >
      <nav className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
        <div className='pt-8 pb-7 items-center gap-x-3'>
          <Logo />
        </div>
        <div className='hidden lg:flex lg:items-center space-x-2 px-4'>
          <HeaderLinks />
          <AuthLinks />
        </div>
        <div className='px-4 block lg:hidden'>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
