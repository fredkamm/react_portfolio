import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// import skill data
import { skills } from '../../data';

const skillNames = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='bg-tertiary py-12 relative'>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
      <div className='container mx-auto relative z-10'>
        <div ref={ref} className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6'>
          {skills.map((skill, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex items-center justify-center group'
                key={index}
              >
                <div className='glass-card p-4 glass-card-hover w-full flex items-center justify-center hover:scale-110 transition-all duration-300'>
                  <img 
                    className='lg:h-20 sm:max-h-12 group-hover:scale-110 transition-transform duration-300' 
                    src={skill.image} 
                    alt={skillNames[index] || `Skill ${index + 1}`} 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
