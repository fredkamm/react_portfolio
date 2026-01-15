import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="container mx-auto h-full relative z-10">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 mb-8 animate-float"
            >
              <p className="text-lg text-accent text-md">
                Hey, I'm Fred! ✌️
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] mb-6"
            >
              I Build & Design <br />
              <span className="text-gradient">Web Applications.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-6 mb-8 max-w-[480px]"
            >
              <p className="text-lg text-center lg:text-left">
                I'm a web developer with a specialization in front-end
                development. Committed to building and designing amazing user
                experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="portfolio" smooth={true} duration={800}>
                <button className="btn group btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all glow-effect hover:scale-105">
                  View my work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
