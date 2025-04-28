import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import stay from "../Images/stay.png";
import bubbles from "../Images/bubbles.jpg";

const EmailOrbitSection = () => {
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      bubbleRef.current.style.left = `${x - 150}px`;
      bubbleRef.current.style.top = `${y - 150}px`;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[100vh] overflow-hidden bg-white"
    >
      {/* Floating dashed bubble with improved responsiveness */}
      <div
        ref={bubbleRef}
        className="absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] 
                   h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] 
                   rounded-full border border-dashed border-purple-300/40 
                   opacity-40 backdrop-blur-sm transition-all duration-300 
                   ease-out pointer-events-none z-0"
      />

      {/* Main content with better spacing */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center 
                    justify-center h-full px-4 sm:px-8 md:px-12 lg:px-20 
                    py-8 sm:py-12 lg:py-16 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Bubble Image with enhanced responsiveness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] 
                      h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] 
                      overflow-hidden lg:mr-8 
                      rounded-tl-[80px] sm:rounded-tl-[120px] md:rounded-tl-[160px] lg:rounded-tl-full 
                      transition-all duration-300 ease-in-out 
                      shadow-lg hover:shadow-xl"
        >
          <img
            src={bubbles}
            alt="Bubbles"
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        {/* Orbit Email Icon with improved positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-[100px] sm:top-[120px] lg:top-[140px] 
                      left-1/2 transform -translate-x-1/2 z-20 
                      hidden lg:block"
        >
          <div className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] 
                        h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              className="absolute animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                />
              </defs>

              <text fill="#4B5563" fontSize="10" fontFamily="sans-serif">
                <textPath href="#circlePath" startOffset="0%">
                  • L E T ’ S   T A L K      
                </textPath>
              </text>
            </svg>
            <div className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] 
                          h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] 
                          rounded-full bg-gray-200/50 backdrop-blur-sm
                          shadow-lg hover:shadow-xl transition-all duration-300
                          flex items-center justify-center 
                          absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2 z-10">
              <svg
                className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9 6 9-6"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Right: Stay in Sync Image with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full 
                      p-3 sm:p-4 md:p-6 lg:p-10 
                      mt-6 sm:mt-12 md:mt-24 lg:mt-36 
                      transition-all duration-300"
        >
          <img
            src={stay}
            alt="Stay in Sync"
            className="w-full 
                     rounded-[10px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] 
                     border-[16px] sm:border-[24px] md:border-[40px] lg:border-[60px] 
                     border-gray-200/90 
                     shadow-xl hover:shadow-2xl 
                     transition-all duration-500 
                     transform hover:scale-[1.02]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EmailOrbitSection;