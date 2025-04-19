import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";
import EmailOrbitSection from "./EmailOrbitSection";
import WavyBackground from "./WavyBackground";
import RippleEffectCanvas from "./RippleEffectCanvas";
import ParticlesBackground from "./ParticlesBackground";
import TestimonialSection from "./TestimonialSection";
import Interactivity from "./Interactivity";
import ScrollContentSection from "./ScrollContentSection";
import ScrollTextSplit from "./ScrollTextSplit";
import WhatWeDoSection from "./WhatWeDoSection";
import LetsChatSection from "./LetsChatSection";
import StatsSection from "./StatsSection";
import DesignSection from "./DesignSection";
import WhyChoose from "./WhyChoose";

const Hero = () => {
  return (
    <section className="relative pt-16 xs:pt-20 mt-12 sm:pt-28 md:pt-32 lg:pt-40 pb-12 xs:pb-14 sm:pb-16 md:pb-20 lg:pb-24 px-3 xs:px-4 sm:px-6 lg:px-10 flex flex-col justify-between items-start min-h-screen">
      <div className="flex flex-col xs:flex-row w-full gap-4 xs:gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Tagline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold w-full xs:w-[240px] sm:w-[300px] lg:w-[400px] text-black mb-4 xs:mb-6 sm:mb-8 lg:mb-10"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block">
            Crafting Code, Design, and AI <br className="hidden xs:block" />
            Wizardry.
          </span>
        </motion.div>

        {/* Heading on the right */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...fadeInUp.visible.transition, delay: 0.3 }}
          className="w-full flex justify-start xs:justify-end"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.1] text-gray-900 text-left">
            Shaping the{" "}
            <span className="relative inline-block">
              digital
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] xs:h-[3px] sm:h-[4px] bg-purple-600 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>{" "}
            <br className="hidden xs:block" />
            future.
          </h1>
        </motion.div>
      </div>

      {/* Email Bubble Section */}
      <EmailOrbitSection />
      <WavyBackground />
      <TestimonialSection />
      <Interactivity />
      <ScrollContentSection />
      {/* Spacer to avoid overlap */}
      <div style={{ height: "100vh" }} />
      <ScrollTextSplit />
      <StatsSection />
      <DesignSection />
      <WhyChoose />
      <LetsChatSection />
    </section>
  );
};

export default Hero;
