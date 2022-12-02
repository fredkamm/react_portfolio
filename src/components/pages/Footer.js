import React from 'react';

// import social data
import { social } from '../../data';

// import logo
import Logo from '../../assets/img/logo(white).png';

const Footer = () => {
  return (
    <footer className='bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col p-3 lg:flex-row space-y-6 lg:space-y-3 items-center justify-around md:space-y-1'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img className='h-[170px] lg:h-[300px]' src={Logo} alt='' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Fred Kamm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
