import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="relative bg-white overflow-hidden 
                      py-16 sm:py-20 lg:py-24 xl:py-32 
                      px-0">
      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
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
              className="flex items-start 
                       gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 
                       px-4 sm:px-6 md:px-8 lg:px-12 
                       flex-shrink-0"
            >
              {/* Founded */}
              <div className="text-left flex-shrink-0">
                <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[160px] 
                           font-bold text-[#1D2233] 
                           leading-none 
                           tracking-tight">
                  2019
                </h2>
                <p className="text-sm sm:text-base md:text-lg 
                          text-[#1D2233] 
                          mt-2 sm:mt-3 md:mt-4">
                  Founded
                </p>
              </div>

              {/* Team Members */}
              <div className="text-left flex-shrink-0">
                <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[160px] 
                           font-bold text-[#1D2233] 
                           leading-none 
                           tracking-tight">
                  20+
                </h2>
                <p className="text-sm sm:text-base md:text-lg 
                          text-[#1D2233] 
                          mt-2 sm:mt-3 md:mt-4">
                  Team Members
                </p>
              </div>

              {/* Client Partnership */}
              <div className="text-left flex-shrink-0">
                <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[160px] 
                           font-bold text-[#1D2233] 
                           leading-none 
                           tracking-tight">
                  2+
                </h2>
                <p className="text-sm sm:text-base md:text-lg 
                          text-[#1D2233] 
                          mt-2 sm:mt-3 md:mt-4 
                          leading-snug">
                  Years on average for <br className="hidden sm:block" />
                  client partnership
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Honors Badge */}
      <div className="absolute top-1/2 right-0 
                    transform -translate-y-1/2 
                    z-10">
        <div className="bg-[#A1D6DB] 
                     w-10 sm:w-12 md:w-14 lg:w-16 
                     h-32 sm:h-36 md:h-40 lg:h-48 
                     flex flex-col justify-center items-center 
                     rounded-l-md 
                     transition-all duration-300 
                     shadow-lg hover:shadow-xl">
          <span className="text-white 
                       text-lg sm:text-xl md:text-2xl 
                       font-bold">
            W.
          </span>
          <span className="text-white 
                       text-[10px] sm:text-xs md:text-sm 
                       rotate-90 mt-2 
                       tracking-widest 
                       uppercase">
            Honors
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
