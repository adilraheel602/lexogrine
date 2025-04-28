import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import statsImage from "../Images/stats.png";
import headImage from "../Images/person.jpg";
import ProjectDeliveryTimeline from "../components/ProjectDeliveryTimeline";
import VennDiagramSection from "../components/VennDiagramSection";
import WorkshopsSection from "../components/WorkshopsSection";
import StrategySection from "../components/StrategySection";
import DesignSectionServices from "../components/DesignSectionServices";
import WebDevelopment from "../components/WebDevelopment";
import MobileDevelopment from "../components/MobileDevelopment";
import MoreServicesScroll from "../components/MoreServicesScroll";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const headlineRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (headlineRef.current) {
        const rect = headlineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress based on section's position relative to viewport
        const scrollProgress =
          (windowHeight - rect.top) / (rect.height + windowHeight);
        setScrollY(scrollProgress); // Tracks scroll progress (0 to 1 when scrolling down)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  // Normalize scroll progress to -1 (top) to 1 (bottom)
  const progress = clamp((scrollY - 0.5) * 2, -1, 1);

  // TranslateX values for upper and lower words
  // Upper word: left (-100%) to right (100%)
  // Lower word: right (100%) to left (-100%)
  const topX = progress * window.innerWidth * 0.5; // Move across half screen width
  const bottomX = -progress * window.innerWidth * 0.5;

  // Opacity logic: fade in from 0 to 1, then fade out from 1 to 0
  const opacityCurve = (p, direction) => {
    // Direction: 1 for scroll down, -1 for scroll up
    const adjustedP = direction === "down" ? p : -p;
    if (adjustedP < -0.5) return clamp((adjustedP + 1) * 2, 0, 1); // Fade in
    if (adjustedP > 0.5) return clamp((1 - adjustedP) * 2, 0, 1); // Fade out
    return 1; // Fully visible in middle
  };

  const topOpacity = opacityCurve(progress, "down"); // Upper word fades in from left
  const bottomOpacity = opacityCurve(progress, "up"); // Lower word fades in from right

  return (
    <>
      {/* Services Section with enhanced responsiveness */}
      <section
        ref={sectionRef}
        className="w-full 
                 px-4 sm:px-6 md:px-8 lg:px-32 
                 py-16 sm:py-20 md:py-24 
                 flex flex-col lg:flex-row 
                 justify-between items-center 
                 gap-8 sm:gap-12"
      >
        {/* Left Content with improved typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 
                   max-w-2xl lg:max-w-none mx-auto"
        >
          <p className="uppercase tracking-widest 
                     text-xs sm:text-sm 
                     text-gray-600 
                     mb-3 sm:mb-4">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl 
                      font-bold text-[#212432] 
                      leading-tight 
                      mb-4 sm:mb-6">
            Elevate your <br className="hidden sm:block" /> vision
          </h1>
          <p className="text-base sm:text-lg 
                     text-gray-500 
                     leading-relaxed 
                     mb-8 sm:mb-10">
            Lexogrine specializes in multiple types of services – from custom
            software development to team augmentation and body leasing. Our
            experienced team of experts will help you choose the right solution
            for your business.
          </p>
          <button className="bg-[#f1f2fd] text-black 
                          px-5 sm:px-6 
                          py-2.5 sm:py-3 
                          text-sm sm:text-base 
                          font-semibold 
                          transition-all duration-300 
                          hover:bg-[#e1e2ed] 
                          focus:outline-none focus:ring-2 focus:ring-[#d1d2dd]">
            hire us
          </button>
        </motion.div>

        {/* Right Visuals with improved positioning */}
        <div className="relative 
                     w-full lg:w-1/2 
                     flex justify-center items-center 
                     mt-8 lg:mt-0">
          <motion.img
            src={statsImage}
            alt="Stats"
            className="w-[85%] sm:w-[80%] lg:w-3/4 
                     mr-4 sm:mr-8 md:mr-16 lg:mr-40 
                     z-10 
                     object-contain"
            style={{ transform: `translateY(${scrollY * 100}px)` }}
            loading="lazy"
          />
          <motion.img
            src={headImage}
            alt="Creative Head"
            className="absolute 
                     bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] 
                     right-[-20px] sm:right-[-30px] md:right-[-35px] lg:right-[-40px] 
                     w-1/4 sm:w-1/3 
                     hidden md:block 
                     object-contain"
            style={{ transform: `translateY(-${scrollY * 100}px)` }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Animated Headline Section with improved scaling */}
      <section
        ref={headlineRef}
        className="w-full 
                 h-[60vh] sm:h-[70vh] 
                 relative overflow-hidden 
                 bg-white 
                 flex flex-col justify-center items-center"
      >
        <motion.h2
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] 
                   font-bold text-green-400 
                   absolute top-[30%] 
                   whitespace-nowrap 
                   tracking-tighter 
                   transform-gpu will-change-transform"
          style={{
            transform: `translateX(${topX}px)`,
            opacity: topOpacity,
          }}
        >
          disruptive
        </motion.h2>
        <motion.h2
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] 
                   font-bold text-[#212432] 
                   absolute top-[50%] 
                   whitespace-nowrap 
                   tracking-tighter 
                   transform-gpu will-change-transform"
          style={{
            transform: `translateX(${bottomX}px)`,
            opacity: bottomOpacity,
          }}
        >
          and beyond
        </motion.h2>
      </section>

      <section>
        <ProjectDeliveryTimeline />
        <VennDiagramSection />
        <WorkshopsSection />
        <StrategySection />
        <DesignSectionServices />
        <WebDevelopment />
        <MobileDevelopment />
        <MoreServicesScroll />
      </section>
    </>
  );
};

export default Services;
