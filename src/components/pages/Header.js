/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

// import components
import Logo from '../../assets/img/logo(white).png';
import Nav from '../../components/pages/navbar/Nav';
import NavMobile from './navbar/NavMobile';
import Socials from '../helpers/Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-50 transition-all duration-300`}
    >
      <div className={`absolute inset-0 ${
        bg ? 'bg-primary/95 backdrop-blur-xl' : 'bg-primary/80 backdrop-blur-md'
      } border-b border-white/5 transition-all duration-300`}></div>
      <div className='container mx-auto h-full flex items-center justify-between relative z-10'>
        {/* logo */}
        <a href='#home' className='hover:opacity-80 transition-opacity duration-300'>
          <img className='h-[200px] lg:h-[250px]' src={Logo} alt='Fred Kamm Logo' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
