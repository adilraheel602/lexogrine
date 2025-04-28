import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const borderLine = (direction, delay = 0) => ({
  hidden: direction === "vertical" ? { height: 0 } : { width: 0 },
  visible:
    direction === "vertical"
      ? { height: "100%", transition: { duration: 1, delay } }
      : { width: "100%", transition: { duration: 1, delay } },
});

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0.9, 1], [0, 100]);

  const cardScrollProgress = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

  const opacity1 = useTransform(cardScrollProgress, [0, 0.3, 0.31], [1, 1, 0]);
  const y1 = useTransform(cardScrollProgress, [0, 0.3, 0.31], [0, 0, 200]);

  const opacity2 = useTransform(cardScrollProgress, [0.3, 0.31, 0.65, 0.66], [0, 1, 1, 0]);
  const y2 = useTransform(cardScrollProgress, [0.3, 0.31, 0.65, 0.66], [200, 0, 0, 200]);

  const opacity3 = useTransform(cardScrollProgress, [0.65, 0.66, 1], [0, 1, 1]);
  const y3 = useTransform(cardScrollProgress, [0.65, 0.66, 1], [200, 0, 0]);

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center overflow-hidden relative"
      style={{ height: "200vh" }}
    >
      <motion.div
        ref={contentRef}
        className="fixed top-0 left-0 w-full h-screen 
                 flex flex-col items-center 
                 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 
                 py-8 sm:py-12 md:py-16"
        style={{ opacity: sectionOpacity, y: sectionY }}
      >
        <div className="w-full max-w-7xl mx-auto relative h-full 
                    flex flex-col items-center">
          {/* Title with improved responsiveness */}
          <div ref={titleRef} className="text-center mb-8 sm:mb-12 z-10 pt-8 sm:pt-12">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] 
                      font-semibold text-gray-900 
                      leading-[1.1] sm:leading-tight 
                      mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1 }}
            >
              Exceptional is <br className="sm:hidden" />
              <br /> our standard
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl 
                       text-gray-900 font-medium 
                       tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Why Choose Us
            </motion.p>
          </div>

          {/* Top Borders */}
          <motion.div
            className="absolute top-32 left-0 h-0.5 w-[calc(50%-10rem)] bg-purple-500"
            variants={borderLine("horizontal", 0)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />
          <motion.div
            className="absolute top-32 right-0 h-0.5 w-[calc(50%-10rem)] bg-purple-500"
            variants={borderLine("horizontal", 0)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />

          {/* Side Borders (avoid bottom overlap) */}
          <motion.div
            className="absolute top-32 left-0 w-0.5 bg-purple-500"
            style={{ height: "calc(100% - 8rem - 0.5rem)" }}
            variants={borderLine("vertical", 0.5)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />
          <motion.div
            className="absolute top-32 right-0 w-0.5 bg-purple-500"
            style={{ height: "calc(100% - 8rem - 0.5rem)" }}
            variants={borderLine("vertical", 1.5)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />

          {/* Bottom Border */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-500"
            variants={borderLine("horizontal", 1)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />

          {/* Cards with enhanced responsiveness */}
          <div className="w-full max-w-3xl mt-20 sm:mt-24 md:mt-32 
                       flex justify-center items-end relative 
                       flex-1 pb-8 pt-16">
            {/* Card Template */}
            {[
              { opacity: opacity1, y: y1 },
              { opacity: opacity2, y: y2 },
              { opacity: opacity3, y: y3 }
            ].map((animation, index) => (
              <motion.div
                key={index}
                className="absolute bg-white 
                         px-6 sm:px-8 
                         py-6 sm:py-8 
                         w-full 
                         flex flex-col sm:flex-row 
                         items-center gap-6 sm:gap-8 
                         rounded-lg 
                         shadow-sm hover:shadow-md 
                         transition-shadow duration-300"
                style={{ opacity: animation.opacity, y: animation.y }}
              >
                <div className="min-w-[80px] sm:min-w-[100px] 
                            h-[80px] sm:h-[100px] 
                            bg-white rounded-full 
                            flex items-center justify-center 
                            shadow-md">
                  <svg width="60" height="60" viewBox="0 0 24 24" className="text-gray-700">
                    <path fill="currentColor" d="M12 2L2 22h20L12 2zM10 16h4v2h-4v-2zm0-4h4v2h-4v-2z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl 
                             font-semibold text-gray-800 
                             mb-2 sm:mb-3">
                    Engineering solutions with technical precision
                  </h3>
                  <p className="text-base sm:text-lg 
                            text-gray-600 
                            leading-relaxed">
                    We are committed to delivering engineering solutions that embody technical precision and superior quality.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
