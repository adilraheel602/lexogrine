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

  // Scroll-based animation for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Control the section's visibility and position
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  const sectionY = useTransform(scrollYProgress, [0.9, 1], [0, 100]);

  // Scroll-based animation for cards
  const cardScrollProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  // Card transitions with non-overlapping opacity
  const opacity1 = useTransform(cardScrollProgress, [0, 0.33, 0.34], [1, 1, 0]);
  const y1 = useTransform(cardScrollProgress, [0, 0.33, 0.34], [0, 0, 80]);

  const opacity2 = useTransform(
    cardScrollProgress,
    [0.33, 0.34, 0.66, 0.67],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(
    cardScrollProgress,
    [0.33, 0.34, 0.66, 0.67],
    [80, 0, 0, 80]
  );

  const opacity3 = useTransform(cardScrollProgress, [0.66, 0.67, 1], [0, 1, 1]);
  const y3 = useTransform(cardScrollProgress, [0.66, 0.67, 1], [80, 0, 0]);

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center overflow-hidden relative"
      style={{ height: "200vh" }}
    >
      <motion.div
        ref={contentRef}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-14"
        style={{ opacity: sectionOpacity, y: sectionY }}
      >
        <div className="w-full max-w-7xl mx-auto relative h-full flex flex-col items-center">
          {/* Title Section positioned above the border frame */}
          <div
            ref={titleRef}
            className="text-center mb-8 sm:mb-10 md:mb-12 z-10 relative pt-8 sm:pt-10 md:pt-12"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold text-gray-900 mb-2 sm:mb-3 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 1 }}
            >
              Exceptional is <br className="sm:hidden" /> our standard
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mt-12 text-gray-900 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={
                isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ delay: 0.3, duration: 1 }}
            >
              Why Choose Us
            </motion.p>
          </div>

          {/* Border Frame with gap for title */}
          {/* Left Top Border */}
          <motion.div
            className="absolute top-32 sm:top-36 md:top-40 left-0 h-0.5 w-[calc(50%-10rem)] sm:w-[calc(50%-12rem)] md:w-[calc(50%-15rem)] lg:w-[calc(50%-18rem)] bg-purple-500"
            variants={borderLine("horizontal", 0)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />

          {/* Right Top Border */}
          <motion.div
            className="absolute top-32 sm:top-36 md:top-40 right-0 h-0.5 w-[calc(50%-10rem)] sm:w-[calc(50%-12rem)] md:w-[calc(50%-15rem)] lg:w-[calc(50%-18rem)] bg-purple-500"
            variants={borderLine("horizontal", 0)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />

          {/* Left Vertical Border */}
          <motion.div
            className="absolute top-32 sm:top-36 md:top-40 left-0 w-0.5 h-[calc(100%-8rem)] sm:h-[calc(100%-9rem)] md:h-[calc(100%-10rem)] bg-purple-500"
            variants={borderLine("vertical", 0.5)}
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

          {/* Right Vertical Border */}
          <motion.div
            className="absolute top-32 sm:top-36 md:top-40 right-0 w-0.5 h-[calc(100%-8rem)] sm:h-[calc(100%-9rem)] md:h-[calc(100%-10rem)] bg-purple-500"
            variants={borderLine("vertical", 1.5)}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          />

          {/* Cards Container */}
          <div className="w-full max-w-5xl flex justify-center items-end relative flex-1 pb-8 pt-16 sm:pt-20 md:pt-24">
            {/* First Card */}
            <motion.div
              className="absolute bg-gradient-to-r from-purple-50 to-white px-8 sm:px-10 md:px-12 py-8 sm:py-10 max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center gap-8 sm:gap-10 md:gap-12 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: opacity1, y: y1 }}
            >
              <div className="min-w-[100px] sm:min-w-[120px] h-[100px] sm:h-[120px] bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  className="text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M12 2L2 22h20L12 2zm0 4.24L18.85 20H5.15L12 6.24zM10 16h4v2h-4v-2zm0-4h4v2h-4v-2z"
                  />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  Engineering solutions with technical precision
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  We are committed to delivering engineering solutions that
                  embody technical precision and superior quality. Our approach
                  is rooted in a deep understanding of the latest technological
                  advancements, enabling us to tackle complex challenges with
                  professional expertise.
                </p>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="absolute bg-gradient-to-r from-purple-50 to-white px-8 sm:px-10 md:px-12 py-8 sm:py-10 max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center gap-8 sm:gap-10 md:gap-12 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: opacity2, y: y2 }}
            >
              <div className="min-w-[100px] sm:min-w-[120px] h-[100px] sm:h-[120px] bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  className="text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-5h10v2H7v-2zm0-4h10v2H7v-2z"
                  />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  Cracking complex cases with innovation
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  We specialize in cracking the most complex cases with a blend
                  of innovation and strategic thinking. Our team excels in
                  dissecting intricate problems.
                </p>
              </div>
            </motion.div>

            {/* Third Card */}
            <motion.div
              className="absolute bg-gradient-to-r from-purple-50 to-white px-8 sm:px-10 md:px-12 py-8 sm:py-10 max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center gap-8 sm:gap-10 md:gap-12 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: opacity3, y: y3 }}
            >
              <div className="min-w-[100px] sm:min-w-[120px] h-[100px] sm:h-[120px] bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  className="text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10h2v6h-2zm0-4h2v2h-2z"
                  />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  Built on bold thinking and trust
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Innovation is our foundation, but so is trust. We build
                  lasting relationships through honesty, delivery, and strategy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
