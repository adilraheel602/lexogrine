import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const CompleteProjectRoadmap = () => {
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  const lineRef3 = useRef(null);
  
  useEffect(() => {
    // Animation for the line drawing effects
    const animateLine = (lineRef, delay) => {
      const line = lineRef.current;
      if (line) {
        const length = line.getTotalLength();
        
        // Set up initial state - line is invisible
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
        
        // Trigger animation after a delay
        setTimeout(() => {
          // CSS animation to draw the line
          line.style.transition = 'stroke-dashoffset 2s ease-in-out';
          line.style.strokeDashoffset = '0';
        }, delay);
      }
    };

    animateLine(lineRef1, 500);
    animateLine(lineRef2, 2500);
    animateLine(lineRef3, 4500);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Animated Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 md:mb-24"
      >
        Project Roadmap
      </motion.h1>
      
      {/* Section 01 - Workshops */}
      <div className="max-w-6xl mx-auto relative mb-16 sm:mb-20 md:mb-24">
        <div className="border border-[#2D7679] border-x-4 border-y-4 p-6 sm:p-8 md:p-10 lg:p-12 relative">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center mb-4 md:mb-0"
            >
              <span className="text-2xl sm:text-3xl font-bold mr-4 sm:mr-8">01</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Workshops</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <p className="text-gray-400 text-base sm:text-lg">
                A team of Lexogrine experts is defining the goals and path to achieve them.
              </p>
            </motion.div>
          </div>
          
          {/* Roadmap boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
            {/* Box 1 - Kickoff meeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#0C0E14] text-white p-4 sm:p-6 pb-24 sm:pb-32 relative"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Kickoff meeting</h3>
              
              {/* Circuit pattern in the first box */}
              <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 200 100" className="text-cyan-500">
                  <g stroke="currentColor" fill="none" strokeWidth="1">
                    <path d="M0,50 L20,50 L20,80 L50,80 L50,30 L80,30 L80,70 L110,70 L110,20 L140,20 L140,60 L170,60 L170,90 L200,90" />
                    <path d="M0,30 L30,30 L30,60 L60,60 L60,10 L90,10 L90,50 L120,50 L120,40 L150,40 L150,80 L180,80 L180,70 L200,70" />
                  </g>
                </svg>
              </div>
            </motion.div>
            
            {/* Box 2-4 with updated classes */}
            {['Q&A Session', 'Project scope of work & estimate', 'Delivery Plan'].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + (index + 1) * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0C0E14] p-4 sm:p-6 pb-24 sm:pb-32 relative"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{title}</h3>
                
                {/* Dashed semi-circle */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <svg width="120" height="60" viewBox="0 0 120 60" className="hidden sm:block">
                    <path 
                      d="M 0,60 A 60,60 0 0,1 120,60" 
                      stroke="#4B5563" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
            
            {/* Animated line that draws from left to right along the bottom */}
            <svg 
              className="absolute bottom-0 left-0 w-full" 
              height="4" 
              style={{ overflow: 'visible' }}
            >
              <path
                ref={lineRef1}
                d="M0,2 L100%,2"
                stroke="#0ED3CF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Section 02 - Project delivery */}
      <div className="max-w-6xl mx-auto relative mb-16 sm:mb-20 md:mb-24">
        <div className="border border-[#2D7679] border-x-4 border-y-4 rounded p-6 sm:p-8 relative">
          {/* Header section with similar responsive classes as above */}
          <div className="flex flex-col md:flex-row justify-between mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center mb-4 md:mb-0"
            >
              <span className="text-2xl sm:text-3xl font-bold mr-4 sm:mr-8">02</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Project delivery with Agile approach</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <p className="text-gray-400 text-base sm:text-lg">
                Day-to-day project delivery using an Agile approach and laser focus on defined milestones.
              </p>
            </motion.div>
          </div>
          
          {/* Agile process boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 relative">
            {['Plan', 'Design', 'Development', 'Testing', 'Release'].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0C0E14] p-4 sm:p-6 pb-24 sm:pb-32 relative"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{title}</h3>
                
                {/* Dashed semi-circle */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <svg width="120" height="60" viewBox="0 0 120 60">
                    <path 
                      d="M 0,60 A 60,60 0 0,1 120,60" 
                      stroke="#4B5563" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
            
            {/* Animated line that draws from left to right along the bottom */}
            <svg 
              className="absolute bottom-0 left-0 w-full" 
              height="4" 
              style={{ overflow: 'visible' }}
            >
              <path
                ref={lineRef2}
                d="M0,2 L100%,2"
                stroke="#0ED3CF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Section 03 - Maintenance & Support */}
      <div className="max-w-6xl mx-auto relative">
        <div className="border border-[#2D7679] border-x-4 border-y-4 rounded p-6 sm:p-8 relative">
          {/* Header section with similar responsive classes */}
          <div className="flex flex-col md:flex-row justify-between mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center mb-4 md:mb-0"
            >
              <span className="text-2xl sm:text-3xl font-bold mr-4 sm:mr-8">03</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Maintenance & Support</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <p className="text-gray-400 text-base sm:text-lg">
                Keeping an eye on the product and delivering new features and improvements.
              </p>
            </motion.div>
          </div>
          
          {/* Could add more content here for the maintenance section */}
          <div className="relative h-16">
            {/* Animated line that draws from left to right along the bottom */}
            <svg 
              className="absolute bottom-0 left-0 w-full" 
              height="4" 
              style={{ overflow: 'visible' }}
            >
              <path
                ref={lineRef3}
                d="M0,2 L100%,2"
                stroke="#0ED3CF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProjectRoadmap;