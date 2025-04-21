import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="relative bg-white overflow-hidden py-16 sm:py-20 lg:py-24 px-0">
      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Translate by half the width (since content is duplicated)
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* Repeat the content twice for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-12 sm:gap-20 lg:gap-32 px-4 sm:px-6 lg:px-8 flex-shrink-0"
            >
              {/* Founded */}
              <div className="text-left flex-shrink-0">
                <h2 className="text-[80px] sm:text-[120px] lg:text-[160px] leading-none font-bold text-[#1D2233]">
                  2019
                </h2>
                <p className="text-base sm:text-lg text-[#1D2233] mt-2">
                  Founded
                </p>
              </div>

              {/* Team Members */}
              <div className="text-left flex-shrink-0">
                <h2 className="text-[80px] sm:text-[120px] lg:text-[160px] leading-none font-bold text-[#1D2233]">
                  20+
                </h2>
                <p className="text-base sm:text-lg text-[#1D2233] mt-2">
                  Team Members
                </p>
              </div>

              {/* Client Partnership */}
              <div className="text-left flex-shrink-0">
                <h2 className="text-[80px] sm:text-[120px] lg:text-[160px] leading-none font-bold text-[#1D2233]">
                  2+
                </h2>
                <p className="text-base sm:text-lg text-[#1D2233] mt-2 leading-snug">
                  Years on average for <br className="hidden sm:block" />
                  client partnership
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Honors Badge */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <div className="bg-[#A1D6DB] w-12 sm:w-14 lg:w-16 h-36 sm:h-40 lg:h-48 flex flex-col justify-center items-center rounded-l-md transition-all duration-300">
          <span className="text-white text-xl sm:text-2xl font-bold">W.</span>
          <span className="text-white text-xs sm:text-sm rotate-90 mt-2 tracking-widest">
            Honors
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
