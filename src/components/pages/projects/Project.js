import React from "react";
import { motion } from "framer-motion";

const Project = ({ item, index }) => {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="mb-8 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <a className="text-base block" href={item.href} target="_blank" rel="noopener noreferrer">
          <img className="rounded-2xl group-hover:scale-105 transition-transform duration-500 w-full h-auto" src={item.image} alt={item.name} />
        </a>
      </div>
      <div className="glass-card p-6 w-full glass-card-hover">
        <p className="capitalize text-accent text-sm mb-3 font-semibold">{item.category}</p>
        <h3 className="text-2xl font-semibold capitalize mb-3 group-hover:text-accent transition-colors">{item.name}</h3>
        <p className="text-base max-w-md leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default Project;
