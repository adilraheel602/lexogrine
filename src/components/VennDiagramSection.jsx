import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollTextSection from "./ScrollTextSection";

const VennDiagramSection = () => {
  const containerRef = useRef(null);
  const fixedSectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const fixedSection = fixedSectionRef.current;
      if (!container || !fixedSection) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        fixedSection.style.display = "flex";
      } else {
        fixedSection.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circle1Dashoffset = useTransform(scrollYProgress, [0, 0.2], [942, 0]);
  const circle2Dashoffset = useTransform(scrollYProgress, [0.1, 0.3], [942, 0]);
  const circle3Dashoffset = useTransform(scrollYProgress, [0.2, 0.4], [942, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 0.2]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[120vh] w-full bg-[#1C2526]"
      >
        {/* Fixed section with improved responsiveness */}
        <motion.div
          ref={fixedSectionRef}
          className="fixed top-0 left-0 h-screen w-full 
                   flex items-center justify-center 
                   overflow-hidden 
                   px-4 sm:px-6 md:px-8"
        >
          <svg
            className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[800px] 
                     max-w-[800px] h-auto aspect-square 
                     transform-gpu will-change-transform"
            viewBox="0 0 600 600"
            fill="none"
          >
            {/* Outer circle with improved visibility */}
            <motion.circle
              cx="300"
              cy="300"
              r="280"
              stroke="#D1D5DB"
              strokeWidth="0.5"
              fill="none"
              opacity={0.3}
              className="transition-opacity duration-300"
            />

            {/* Animated circles with better performance */}
            <motion.circle
              cx="300"
              cy="200"
              r="150"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeDashoffset={circle1Dashoffset}
              fill="none"
              className="transition-all duration-300"
            />
            <motion.circle
              cx="400"
              cy="350"
              r="150"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeDashoffset={circle2Dashoffset}
              fill="none"
              className="transition-all duration-300"
            />
            <motion.circle
              cx="200"
              cy="350"
              r="150"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeDashoffset={circle3Dashoffset}
              fill="none"
              className="transition-all duration-300"
            />

            {/* Grid pattern with enhanced visibility */}
            <motion.g style={{ opacity: gridOpacity }}>
              <defs>
                <pattern
                  id="grid-pattern"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#00ADD7"
                    strokeWidth="0.5"
                    className="transition-all duration-300"
                  />
                </pattern>
              </defs>
              <path
                d="M 300 200 L 400 350 L 300 500 L 200 350 Z"
                fill="url(#grid-pattern)"
                className="transition-all duration-300"
              />
            </motion.g>

            {/* Text labels with responsive sizing */}
            <motion.text
              x="300"
              y="120"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="clamp(16px, 4vw, 24px)"
              fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              fontWeight="400"
              style={{ opacity: labelOpacity }}
              className="transition-opacity duration-300"
            >
              Technology
            </motion.text>
            <motion.text
              x="470"
              y="360"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="clamp(16px, 4vw, 24px)"
              fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              fontWeight="400"
              style={{ opacity: labelOpacity }}
              className="transition-opacity duration-300"
            >
              Design
            </motion.text>
            <motion.text
              x="130"
              y="360"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="clamp(16px, 4vw, 24px)"
              fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              fontWeight="400"
              style={{ opacity: labelOpacity }}
              className="transition-opacity duration-300"
            >
              Strategy
            </motion.text>
            <motion.text
              x="300"
              y="360"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="clamp(16px, 4vw, 24px)"
              fontFamily="'Inter', system-ui, -apple-system, sans-serif"
              fontWeight="400"
              style={{ opacity: labelOpacity }}
              className="transition-opacity duration-300"
            >
              Product
            </motion.text>
          </svg>
        </motion.div>
      </div>

      {/* ScrollTextSection with proper spacing */}
      <div className="relative z-10">
        <ScrollTextSection />
      </div>
    </>
  );
};

export default VennDiagramSection;