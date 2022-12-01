import React from 'react';

// import brands data
import { brands } from '../../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div
        className='container mx-auto flex md: self-center items-center flex-wrap justify-around'
      >
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
            >
              <img src={brand.img} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
