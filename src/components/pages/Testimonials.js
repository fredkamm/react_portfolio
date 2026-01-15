import React from "react";

// import slider helper
import TestiSlider from "../helpers/TestiSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          <p className="subtitle">
            Here are some recent testimonials from my customers!
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
