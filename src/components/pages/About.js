import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "../../assets/img/profilepicture.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section bg-secondary relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="container mx-auto relative z-10">
        <div ref={ref} className="flex flex-col xl:flex-row gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <img
              className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl relative glass-card"
              src={Image}
              alt="Fred Kamm - Web Developer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="glass-card p-8 w-full">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  Fred Kamm
                </h2>
                <p className="mb-4 text-accent text-lg font-semibold">
                  Freelance Frontend Web Developer
                </p>
                <hr className="mb-8 opacity-10" />
                <p className="mb-8 text-lg leading-relaxed">
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
                <button className="btn group btn-md bg-accent hover:bg-accent-hover transition-all glow-effect hover:scale-105">
                  Contact me
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
