import React from 'react';

// import brands data
import { brands } from '../../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center relative'>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className='container mx-auto flex md: self-center items-center flex-wrap justify-around relative z-10'>
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
              className='glass-card p-4 glass-card-hover hover:scale-110 transition-all duration-300'
            >
              <img src={brand.img} alt='' className='opacity-80 hover:opacity-100 transition-opacity' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
