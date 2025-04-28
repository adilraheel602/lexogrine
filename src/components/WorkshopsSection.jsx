import React from "react";
import { motion } from "framer-motion";
import workshop from "../Images/workshop.jpg";
import founder from "../Images/founder.png";

const WorkshopsSection = () => {
  return (
    <section className="relative w-full bg-white 
                     flex flex-col lg:flex-row 
                     items-start justify-between 
                     px-4 sm:px-6 md:px-8 lg:px-16 
                     pt-12 sm:pt-16 md:pt-20 lg:pt-24 
                     pb-24 sm:pb-28 md:pb-32">
      
      {/* Left: Fixed Image with improved responsiveness */}
      <div className="w-full lg:w-1/2 
                   flex px-4 sm:px-8 md:px-16 lg:px-32 
                   justify-center lg:justify-start 
                   sticky top-32 
                   h-[400px] sm:h-[500px] md:h-[600px]">
        <div className="w-[280px] sm:w-[320px] md:w-[380px] 
                     h-[400px] sm:h-[450px] md:h-[500px] 
                     overflow-hidden 
                     rounded-t-[8rem] sm:rounded-t-[10rem] rounded-b-none 
                     shadow-lg hover:shadow-xl 
                     transition-shadow duration-300">
          <img
            src={workshop}
            alt="Workshop Visual"
            className="w-full h-full 
                    object-cover 
                    transition-transform duration-500 
                    hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right: Scrollable Content with enhanced spacing */}
      <div className="w-full lg:w-1/2 
                   mt-12 sm:mt-16 lg:mt-0 
                   lg:pl-16 
                   text-center lg:text-left 
                   relative">
        {/* Heading with improved typography */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl 
                   font-bold text-[#1E1E1E] 
                   mb-4 sm:mb-6"
        >
          Workshops
        </motion.h2>

        {/* Paragraph with better readability */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg 
                   text-[#3C3C3C] 
                   mb-8 sm:mb-12 
                   max-w-lg 
                   leading-relaxed"
        >
          Our most experienced and talented people will help you harden your idea and prepare a clear plan for its delivery.
        </motion.p>

        {/* Services Grid with improved layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 
                   gap-y-6 sm:gap-y-10 
                   gap-x-6 sm:gap-x-10 
                   mb-12 sm:mb-16"
        >
          {[
            "Product analysis",
            "Product roadmap",
            "Design verification",
            "Technical expertise",
            "Delivery plan preparation",
            "Product budget estimation",
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-32 border-t border-gray-300 mb-3"></div>
              <p className="font-semibold text-[#1E1E1E] text-sm leading-snug">
                {item}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Read More Button with enhanced interaction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="bg-[#F3F4FA] hover:bg-[#E0E2F5] 
                         text-[#6474E5] 
                         px-5 sm:px-6 
                         py-2.5 sm:py-3 
                         text-sm sm:text-base 
                         font-semibold 
                         rounded-md 
                         shadow-sm hover:shadow-md 
                         transform transition-all duration-300 
                         hover:scale-[1.02] 
                         focus:outline-none focus:ring-2 focus:ring-[#6474E5]/50">
            Read More
          </button>
        </motion.div>

        {/* Contact Card with improved responsiveness */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute 
                   right-0 -bottom-28 
                   mr-4 sm:mr-8 md:mr-16 lg:mr-96 
                   bg-white 
                   p-4 sm:p-5 
                   rounded-lg 
                   shadow-lg hover:shadow-xl 
                   flex items-center gap-3 sm:gap-4 
                   w-[300px] sm:w-[320px] md:w-[340px] 
                   transition-all duration-300"
        >
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={founder}
              alt="Michael Majka"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1E1E1E]">Michael Majka</p>
            <p className="text-xs text-[#7A7A7A]">CO-FOUNDER AND CEO</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-end">
            <p className="text-xs text-[#7A7A7A] mb-1">Interested in starting a project?</p>
            <button className="bg-[#EDE8FD] text-[#6B49E8] px-4 py-1 rounded-full text-xs font-semibold flex items-center hover:bg-[#d8d2f5]">
              Brief us
              <span className="ml-1">✨</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
