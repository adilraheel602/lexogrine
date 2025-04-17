import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const borderLine = (direction, delay = 0) => ({
  hidden: direction === "vertical" ? { height: 0 } : { width: 0 },
  visible:
    direction === "vertical"
      ? { height: "100%", transition: { duration: 1, delay } }
      : { width: "100%", transition: { duration: 1, delay } },
});

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const WhyChooseUs = () => {
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);

  const isFirstCardInView = useInView(firstCardRef, {
    once: true,
    amount: 0.5,
  });
  const isSecondCardInView = useInView(secondCardRef, {
    once: true,
    amount: 0.5,
  });
  const isThirdCardInView = useInView(thirdCardRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Purple Border Lines - Open frame */}
        <motion.div
          className="absolute top-32 left-0 h-1 w-1/3 bg-purple-500"
          variants={borderLine("horizontal", 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-32 left-0 w-1 h-full bg-purple-500"
          variants={borderLine("vertical", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-1 w-full bg-purple-500"
          variants={borderLine("horizontal", 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-32 right-0 w-1 h-full bg-purple-500"
          variants={borderLine("vertical", 1.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-32 right-0 h-1 w-1/3 bg-purple-500"
          variants={borderLine("horizontal", 2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Title Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 z-10 relative">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Exceptional is <br className="sm:hidden" /> our standard
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Why Choose Us
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="z-10 flex flex-col gap-32 sm:gap-48 md:gap-64 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 min-h-[80vh] sm:min-h-screen">
          {/* First Card */}
          <motion.div
            ref={firstCardRef}
            className="bg-gray-100/90 backdrop-blur-xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 1, y: 0 }}
          >
            <div className="min-w-[80px] sm:min-w-[100px] h-[80px] sm:h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-700">
                <path
                  fill="currentColor"
                  d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l2,2H20V18z M18,10H6v2h12V10z M14,14H6v2h8V14z"
                />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                Results that speak louder: evidenced
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                We don't just promise excellence; we deliver it. Our portfolio
                is a testament to our commitment to producing results that speak
                louder than words.
              </p>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            ref={secondCardRef}
            className="bg-gray-100/90 backdrop-blur-xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariant}
            initial="hidden"
            animate={isSecondCardInView ? "visible" : "hidden"}
          >
            <div className="min-w-[80px] sm:min-w-[100px] h-[80px] sm:h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <svg
                width="48"
                height="48"
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                Cracking complex cases with innovation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                We specialize in cracking the most complex cases with a blend of
                innovation and strategic thinking. Our team excels in dissecting
                intricate problems.
              </p>
            </div>
          </motion.div>

          {/* Third Card */}
          <motion.div
            ref={thirdCardRef}
            className="bg-gray-100/90 backdrop-blur-xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={cardVariant}
            initial="hidden"
            animate={isThirdCardInView ? "visible" : "hidden"}
          >
            <div className="min-w-[80px] sm:min-w-[100px] h-[80px] sm:h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <svg
                width="48"
                height="48"
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                Built on bold thinking and trust
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                Innovation is our foundation, but so is trust. We build lasting
                relationships through honesty, delivery, and strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
