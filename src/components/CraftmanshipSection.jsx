import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import phoneImage from "../Images/phone.png";
import healthImage from "../Images/healthImage.png";
import dew from "../Images/dew.png";
import glhf from "../Images/glhf.png";
import lhm from "../Images/lhm.png";
import clouty from "../Images/clouty.png"; // Optional, if image is used in CTA

const CraftsmanshipSection = () => {
  return (
    <section className="pt-20 sm:pt-32 lg:pt-40 pb-0 px-4 sm:px-6 lg:px-8 bg-white text-center relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-700 leading-tight tracking-tight"
      >
        Code <br className="hidden sm:block" />
        <span className="block mt-2 sm:mt-0">Craftsmanship</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-3 sm:mt-4 text-sm sm:text-base tracking-widest text-gray-700 font-semibold uppercase"
      >
        At Its Finest
      </motion.p>

      {/* Main image */}
      <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="p-3 sm:p-4 md:p-6 transform transition-all duration-500 hover:scale-95"
        >
          <img
            src={phoneImage}
            alt="Mobile UI"
            className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Caption */}
      <div className="mt-2 sm:mt-4 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base text-gray-800 font-medium max-w-3xl mx-auto"
        >
          <p className="mb-3 sm:mb-0">Take your followers from online to offline</p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-bold">HelloGo</span>
            <span className="w-6 sm:w-8 h-px bg-gray-400 inline-block"></span>
            <span>22'</span>
          </div>
        </motion.div>
      </div>

      {/* Health Preview Section */}
      <div className="bg-white px-4 mt-16 sm:mt-20 lg:mt-24 pt-12 sm:pt-16 pb-24 sm:pb-32 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-gray-100 overflow-hidden transform transition-all duration-500 hover:scale-95"
            >
              <img
                src={healthImage}
                alt="Health App Preview"
                className="w-full max-w-sm sm:max-w-md lg:max-w-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left text-gray-800 font-medium text-sm sm:text-base mt-3 sm:mt-4 sm:ml-4"
          >
            All the health answers in your pocket
          </motion.p>
        </div>
      </div>

      {/* GLHF / AI Section */}
      <div className="bg-white px-4 pt-4 pb-24 sm:pb-32 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-start gap-6 sm:gap-8">
            {/* Right aligned DEW box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:mr-12 lg:order-2 text-right transform transition-all duration-500 hover:scale-95"
            >
              <img 
                src={dew} 
                alt="DEW AI" 
                className="w-full max-w-xs sm:max-w-sm ml-auto"
                loading="lazy"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-gray-800 text-left mt-2 sm:mt-3"
              >
                The true beauty of AI
              </motion.p>
            </motion.div>

            {/* GLHF phone image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full mt-60 sm:mt-72 lg:mt-80 ml-16 sm:ml-24 lg:ml-36 lg:w-1/2 lg:order-1 transform transition-all duration-500 hover:scale-95"
            >
              <img
                src={glhf}
                alt="GLHF Phone Preview"
                className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl"
                loading="lazy"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-left text-gray-800 mt-2 sm:mt-3"
              >
                The truly techy beverage.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Esports Tool Section */}
      <div className="bg-white px-4 pt-4 pb-24 sm:pb-32 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-xl text-right transform transition-all duration-500 hover:scale-95"
            >
              <img 
                src={lhm} 
                alt="Esports Tool" 
                className="w-full rounded-lg"
                loading="lazy"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-left text-gray-800 mt-2 sm:mt-3"
              >
                All-in-one AI-based tool for esports broadcasting
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white pb-24 sm:pb-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-8xl font-semibold text-gray-900 leading-tight tracking-tight"
          >
            App-solute <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-4">Ambition?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 lg:mt-20 text-xl sm:text-2xl font-bold text-gray-700"
          >
            Let's turn your business vision into a thriving reality.
          </motion.p>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden wave-btn group px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-satoshi bg-[#282D3C] text-white hover:bg-[#151A27] transition-all duration-500 shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full">
                get a quote
              </span>
              <span className="absolute top-full left-0 w-full text-center z-10 transition-transform duration-500 group-hover:translate-y-[-50%]">
                get a quote
              </span>
            </motion.button>
          </div>
          <div className="mb-32 sm:mb-44"></div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;