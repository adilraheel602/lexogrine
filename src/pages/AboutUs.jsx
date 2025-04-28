import React from "react";
import { motion } from "framer-motion";
import Letter from "../components/Letter3D";
import ClientMapSection from "../components/ClientMapSection";
import IdentityCheckSection from "../components/IdentityCheckSection";

const AboutUs = () => {
  return (
    <>
      {/* Top Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white w-full text-center px-6 sm:px-12 lg:px-32 pt-40 pb-32"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[42px] sm:text-6xl md:text-[80px] text-left font-semibold leading-tight text-[#212432]"
        >
          Dedicated to quality <br />
          <span className="block ml-48 mt-2">Driven by innovation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto text-left px-32 ml-16 text-[#2B2D42] text-base sm:text-lg md:text-xl leading-relaxed font-normal"
        >
          Lexogrine has been founded by a team of experienced IT experts from
          <br />
          different fields with a goal to offer the best quality, transparency,
          and
          <br /> flexibility and to become a center of innovation for other
          companies.
        </motion.p>
      </motion.section>

      <div className="flex relative">
        <Letter />
        <IdentityCheckSection />
      </div>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white px-6 mt-36 sm:px-12 lg:px-32 pb-32"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-semibold text-[#212432] mb-16"
        >
          Our Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-[#1C1E25] justify-between text-lg leading-[1.9] font-light max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Established in 2019 by a team of industry experts with extensive
            experience in designing and developing web, mobile, and desktop
            applications, Lexogrine has maintained a steadfast focus on
            providing expertise in cutting-edge scalable technologies. 
            {/* ... */}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Having established JavaScript and TypeScript as our foundational
            technology stack, we made this choice to ensure a clean codebase
            and easy knowledge sharing among the development team.
            {/* ... */}
          </motion.p>
        </div>

        {/* ✅ Animated "3 years" small section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full px-0 py-20 bg-white text-left"
        >
          <div className="text-xl space-y-4 sm:text-2xl md:text-4xl leading-[2.5] font-medium text-[#212432] w-full mx-0 px-4">
            <p>Thanks to our experience and commitment in just 3 years</p>
            <p>we managed to deliver more than 50 digital products and</p>
            <p>built our own successful software solution Lexogrine HUD</p>
            <p>Manager which in less than a year became an esports</p>
            <p>industry standard.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Timeline Strips already animated (no change needed) */}

      {/* Our Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white px-6 sm:px-12 lg:px-32 py-24"
      >
        <motion.h2
          className="text-5xl font-bold text-[#212432] text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-3 gap-x-16 gap-y-12 max-w-[1300px] mx-auto">
          {/* Values already animated individually */}
        </div>
      </motion.section>

      {/* Client Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ClientMapSection />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white pb-32 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-6xl sm:text-8xl font-semibold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            App-solute <br />
            <span className="block mt-4">Ambition?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-2xl font-bold text-gray-700"
          >
            Let's turn your business vision into a thriving reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            {/* CTA Button */}
            <button className="relative overflow-hidden wave-btn group mt-4 text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-sm lg:text-base font-satoshi font-thin text-[0.5px] bg-[#282D3C] hover:bg-[#151A27] transition-all duration-500 shadow-md hover:shadow-lg">
              <span className="relative z-10 block transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
                get a quote
              </span>
              <span className="absolute top-full left-0 w-full text-center z-10 transition-all duration-500 transform group-hover:top-4 group-hover:opacity-100 opacity-0">
                get a quote
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
