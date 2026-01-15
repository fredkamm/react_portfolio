import React from 'react';

// testimonials data
import { testimonials } from '../../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const TestiSlider = () => {

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                <div className='w-32 h-32 lg:w-40 lg:h-40 relative group flex-shrink-0'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300'></div>
                  <img className='rounded-2xl relative glass-card w-full h-full object-cover' src={authorImg} alt={`${authorName} testimonial`} />
                </div>
                <div className='glass-card p-6 flex flex-col max-w-2xl'>
                  <h5 className='font-body text-lg lg:text-xl mb-4 italic font-normal leading-relaxed'>
                    " {authorText} "
                  </h5>
                  <div className='border-t border-white/10 pt-3'>
                    <p className='text-base lg:text-lg text-accent font-semibold'>{authorName}</p>
                    <p className='text-sm lg:text-base text-paragraph'>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
