import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollTextSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lines = [
    "Lexogrine excels in AI, mobile, and web development,",
    "offering integrated tech solutions.",
    "We specialize in efficient AI systems, user-friendly mobile apps,",
    "and dynamic websites, ensuring market leadership for our clients.",
  ];

  return (
    <section className="min-h-screen w-full 
                      flex items-center justify-center 
                      bg-[#1C2526] 
                      mt-[0vh] 
                      px-4 sm:px-6 md:px-8 lg:px-12 
                      py-16 sm:py-20 md:py-24 lg:py-32">
      <motion.div
        ref={ref}
        className="text-center 
                 max-w-4xl mx-auto 
                 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] 
                 leading-tight sm:leading-snug 
                 font-semibold 
                 transform-gpu will-change-transform"
      >
        {lines.map((text, index) => {
          const color = useTransform(
            scrollYProgress,
            [0.2 + index * 0.1, 0.4 + index * 0.1],
            ["#9CA3AF", "#FFFFFF"]
          );

          return (
            <motion.div
              key={index}
              style={{ color }}
              className="mb-2 sm:mb-3 md:mb-4 
                      opacity-0 animate-fadeIn 
                      transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {text}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ScrollTextSection;