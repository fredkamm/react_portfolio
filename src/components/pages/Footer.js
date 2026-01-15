import React from 'react';

// import social data
import { social } from '../../data';

// import logo
import Logo from '../../assets/img/logo(white).png';

const Footer = () => {
  return (
    <footer className='bg-tertiary relative py-4 lg:py-5'>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className='container mx-auto relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6'>
          <div className='flex space-x-5 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-lg hover:text-accent-light hover:scale-110 transition-all duration-300' href={href} key={index} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              );
            })}
          </div>
          <div className='flex items-center justify-center'>
            <img className='h-24 lg:h-32' src={Logo} alt='Fred Kamm Logo' />
          </div>
          <p className='text-paragraph opacity-80 text-sm lg:text-[15px] text-center'>
            &copy; 2024 Fred Kamm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
