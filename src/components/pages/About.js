import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

// import img
import Image from "../../assets/img/profilepicture.png";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Fred Kamm
              </h2>
              <p className="mb-4 text-accent">
                Freelance Frontend Web Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a web developer leveraging my creative background to build
                a more intuitive user experience on the web. Recently earned a
                certificate in full stack development from The University of
                Pennsylvania Coding Bootcamp, with newly developed skills in
                JavaScript, CSS, React.js, and responsive web design. <br></br>
                Known as an innovative problem solver passionate about
                developing apps, focusing on mobile-first design and
                development. With each project, my aim is best to engage my
                audience for an impactful user experience.
              </p>
            </div>
            <Link to="contact" smooth={true} duration={800}>
              <button className="btn group btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
