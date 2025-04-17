import React from "react";
import { motion } from "framer-motion";
import design from "../Images/design.jpg";
import logopic from "../Images/logopic.png";
import design01 from "../Images/design01.jpg";
import design021 from "../Images/design021.png";
import design022 from "../Images/design022.png";
import design023 from "../Images/design023.png";

const DesignSection = () => {
  return (
    <section className="flex flex-row relative bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
        {/* ✅ Left Visuals */}
        <motion.div
          className="relative w-full flex flex-col items-start justify-start min-h-[480px] sm:min-h-[520px] md:min-h-[580px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* 3D Visual */}
          <motion.div
            className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto rounded-br-[200px] sm:rounded-br-[240px] md:rounded-br-[280px] overflow-hidden shadow-lg"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <img
              src={design}
              alt="3D Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Hand holding phone */}
          <div className="relative">
            {/* Logo to place inside the phone */}
            <motion.div className="absolute top-[-20px] right-[-40px] h-10 w-10 sm:h-12 sm:w-12 z-40 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={logopic}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.img
              src={design01}
              alt="Hand Phone"
              className="absolute top-[30px] right-[-160px] sm:right-[-180px] w-[110px] sm:w-[130px] md:w-[150px] z-10"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Colored patch bars */}
          <motion.div
            className="absolute bottom-[-90px] sm:bottom-[-100px] md:bottom-[-110px] left-[240px] sm:left-[260px] md:left-[280px] w-[200px] sm:w-[220px] md:w-[250px] flex flex-col z-0 space-y-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <div className="h-[22px] sm:h-[24px] md:h-[26px] bg-[#F26060] rounded-sm transform hover:scale-105 transition-transform duration-300" />
            <div className="h-[22px] sm:h-[24px] md:h-[26px] bg-[#8D6BF9] rounded-sm transform hover:scale-105 transition-transform duration-300" />
            <div className="h-[22px] sm:h-[24px] md:h-[26px] bg-[#55E0DD] rounded-sm transform hover:scale-105 transition-transform duration-300" />
          </motion.div>

          {/* Phone stack - using map for better code organization */}
          {[
            { img: design021, bottom: -20, left: 420, zIndex: 30 },
            { img: design022, bottom: -40, left: 370, zIndex: 20 },
            { img: design023, bottom: -70, left: 350, zIndex: 10 },
          ].map((phone, index) => (
            <motion.div
              key={index}
              className="absolute flex gap-4 rotate-[-15deg]"
              style={{
                bottom: phone.bottom,
                left: `min(${phone.left}px, calc(80% + ${index * 30}px))`,
                zIndex: phone.zIndex,
              }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={phone.img}
                alt={`Phone UI ${index + 1}`}
                className="w-20 sm:w-24 md:w-28 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2233] leading-tight">
            Design first software <br className="hidden md:block" />
            development
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6 leading-relaxed">
            At Lexogrine, we're using our expertise in design and development to
            help your business to use full potential of the digital era. We're
            driven by strategy and user experience, connecting design with
            technology, making complex problems simple.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSection;
