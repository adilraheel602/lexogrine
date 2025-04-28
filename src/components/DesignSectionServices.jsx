import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import designImage from "../Images/designpic.jpg";
import designImage01 from "../Images/designpic01.jpg";

const DesignSectionServices = () => {
  const designItems = [
    "Websites and web platforms",
    "Mobile app designs",
    "eCommerce",
    "Brand Strategy",
    "Logo Design",
    "Design Guidelines",
    "Design Systems",
  ];

  return (
    <section className="w-full bg-white">
      {/* Top Design Section */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-20">
        {/* Left image with custom shape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] transition-transform duration-500 hover:scale-[1.02]"
        >
          <svg
            viewBox="0 0 500 600"
            className="w-full h-auto shadow-lg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <clipPath id="design-clip" clipPathUnits="userSpaceOnUse">
                <path d="M 0 300 Q 0 0 250 0 Q 500 0 500 300 Q 500 600 250 600 Q 0 600 0 300 Z" />
              </clipPath>
            </defs>
            <image
              href={designImage}
              width="500"
              height="600"
              clipPath="url(#design-clip)"
              preserveAspectRatio="xMidYMid slice"
              className="transform transition-transform duration-700"
            />
          </svg>
        </motion.div>

        {/* Right text area */}
        <div className="w-full lg:w-[55%] space-y-6 sm:space-y-8 lg:space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1E1E1E] tracking-tight"
          >
            Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#3C3C3C] max-w-2xl leading-relaxed"
          >
            Bring new digital products to the market or extend the existing ones
            with our experienced team of designers, developers, and testers.
            Build an MVP to test the idea or scale your development by adding
            our experienced specialists.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 lg:gap-y-10 gap-x-6 sm:gap-x-8">
            {designItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start group transition-all duration-300"
              >
                <div className="w-full border-t border-[#1E1E1E] mb-2 transition-all duration-300 group-hover:border-purple-500" />
                <p className="font-medium text-[#1E1E1E] leading-snug max-w-[14rem] transition-colors duration-300 group-hover:text-purple-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Dew AI Section */}
      <div className="w-full bg-[#f4f9ff] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Left text */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-[#1E1E1E] font-medium flex items-center gap-3 sm:gap-4"
            >
              <span>Dew AI</span>
              <span className="w-8 sm:w-12 h-px bg-black inline-block"></span>
              <span>20'</span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E1E1E] leading-tight"
            >
              The true beauty <br className="hidden sm:block" /> of AI.
            </motion.h3>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 transition-all duration-500 hover:scale-[1.02]"
          >
            <img
              src={designImage01}
              alt="Dew AI Preview"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignSectionServices;