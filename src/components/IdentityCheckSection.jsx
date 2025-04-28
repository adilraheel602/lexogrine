import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backgroundImage from "../Images/bigPic.png"; // Placeholder image URL
import mobileImage from "../Images/bigPic01.png"; // Placeholder image URL

// Placeholder image URLs - replace with actual image paths

const IdentityCheckSection = () => {
  const sectionRef = useRef(null);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress into a y-position for the mobile image
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Move from 100px below to 100px above

  return (
    <section
      ref={sectionRef}
      className="relative w-1/2 mr-44 h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Mobile Screen Image */}
      <motion.div
        style={{ y }}
        className="relative z-10"
      >
        <img
          src={mobileImage}
          alt="Mobile Screen"
          className="w-72 h-auto shadow-lg rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default IdentityCheckSection;