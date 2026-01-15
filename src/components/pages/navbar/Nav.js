import React from 'react';

// import navigation data
import { navigation } from '../../../data';

// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-6 capitalize text-[15px] font-medium'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-white/90 hover:text-accent cursor-pointer relative group'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300 relative z-10 py-2 block'
              >
                {item.name}
              </Link>
              <span className='absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300'></span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
