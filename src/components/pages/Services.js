import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import services data
import { services } from "../../data";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section bg-tertiary relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">These are the services that I provide</p>
        </div>
        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card glass-card-hover p-8 group"
                key={index}
              >
                <div className="text-accent rounded-lg w-16 h-16 flex justify-center items-center mb-6 text-[32px] glass bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-4 group-hover:text-accent transition-colors">{name}</h4>
                <p className="leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
