import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import worldMap from "../Images/map.png";

const ClientMapSection = () => {
  const markers = [
    { top: "42%", left: "32%", label: "USA" },
    { top: "52%", left: "73%", label: "France" },
    { top: "44%", left: "68%", label: "Germany" },
    { top: "48%", left: "65%", label: "Spain" },
    { top: "75%", left: "40%", label: "South America" },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Animate only once when in view
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-[#212432] mb-8 sm:mb-12 md:mb-16 leading-tight sm:leading-relaxed max-w-4xl mx-auto"
      >
        We have worked with clients <br className="hidden sm:block" /> from all
        over the world
      </motion.h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Animated Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Smooth transition with a slight delay
          viewport={{ once: true }} // Animate only once when in view
          className="relative group transition-transform duration-500 ease-out hover:scale-[1.02]"
        >
          <img
            src={worldMap}
            alt="World Map Showing Client Locations"
            className="w-full h-auto object-contain select-none"
            draggable="false"
          />

          {/* Location Markers */}
          {markers.map((marker, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 
                         bg-black rounded-full shadow-lg 
                         before:content-[''] before:absolute before:inset-0 
                         before:rounded-full before:bg-black before:animate-ping 
                         before:opacity-75"
              style={{
                top: marker.top,
                left: marker.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Location Label */}
              <span
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1
                             text-xs sm:text-sm text-gray-600 font-medium 
                             whitespace-nowrap opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"
              >
                {marker.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMapSection;