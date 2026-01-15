import React from "react";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest work
          </h2>
          <p className="subtitle">
            CLICK on the images of the projects to explore the applications!
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
