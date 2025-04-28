import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import crypto from "../Images/crypto.jpg";
import devops from "../Images/devops.jpg";
import augment from "../Images/augment.jpg";

const MoreServicesScroll = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const boxOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const boxY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen 
                px-4 sm:px-6 md:px-16 lg:px-24 
                py-16 sm:py-24 md:py-28 lg:py-32 
                bg-white"
    >
      <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
        {/* Left Heading */}
        <motion.div
          className="lg:w-1/2 space-y-4 sm:space-y-6"
          style={{ x: headingX }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl 
                      font-semibold text-[#1E1E1E] 
                      leading-tight">
            To Infinity and <br /> Beyond
          </h2>
          <p className="text-xs sm:text-sm 
                     tracking-widest text-gray-500 
                     uppercase">
            More Services
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl">
            Lexogrine offers both end-to-end product delivery and team
            extensions and augmentation. Choose the partnership model that suits you!
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                   gap-6 sm:gap-8"
          style={{ opacity: boxOpacity, y: boxY }}
        >
          {/* Service Cards with enhanced responsiveness */}
          {/* Card Template - repeated for each service */}
          <div className="border-l border-gray-300 
                       px-4 sm:px-6 
                       py-6 sm:py-8">
            <h3 className="font-bold 
                       text-lg sm:text-xl 
                       text-[#1E1E1E] 
                       mb-3 sm:mb-4">
              Crypto & Blockchain
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              Get premier crypto and blockchain development services for top
              technologies and innovative solutions.
            </p>
            <ul className="text-sm sm:text-base text-gray-500 
                        space-y-1 sm:space-y-2">
              <li>Blockchain development and integration</li>
              <li>Wallet integration</li>
              <li>Smart contracts</li>
              <li>Web 3 & NFTs</li>
            </ul>
            <img
              src={crypto}
              alt="Crypto"
              className="mt-6 sm:mt-8 rounded-b-full 
                      transition-transform duration-300 
                      hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="border-l border-gray-300 
                       px-4 sm:px-6 
                       py-6 sm:py-8">
            <h3 className="font-bold 
                       text-lg sm:text-xl 
                       text-[#1E1E1E] 
                       mb-3 sm:mb-4">
              DevOps
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              Use our professional DevOps solutions for your cloud
              infrastructure.
            </p>
            <ul className="text-sm sm:text-base text-gray-500 
                        space-y-1 sm:space-y-2">
              <li>AWS: EC2, S3, CloudFront, Lambda</li>
              <li>Blockchain deployment</li>
              <li>Nginx, Apache config</li>
              <li>MySQL, MariaDB</li>
              <li>SSL with Let’s Encrypt</li>
            </ul>
            <img
              src={devops}
              alt="DevOps"
              className="mt-6 sm:mt-8 rounded-b-full 
                      transition-transform duration-300 
                      hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="border-l border-gray-300 
                       px-4 sm:px-6 
                       py-6 sm:py-8">
            <h3 className="font-bold 
                       text-lg sm:text-xl 
                       text-[#1E1E1E] 
                       mb-3 sm:mb-4">
              Tech R&D
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              Pioneering custom research and development for tech innovation.
            </p>
            <ul className="text-sm sm:text-base text-gray-500 
                        space-y-1 sm:space-y-2">
              <li>Emerging technology exploration</li>
              <li>Proof of concept development</li>
              <li>Prototyping and MVPs</li>
              <li>AI/ML Integration</li>
            </ul>
            <img
              src={augment}
              alt="Tech"
              className="mt-6 sm:mt-8 rounded-b-full 
                      transition-transform duration-300 
                      hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* CTA Section with improved responsiveness */}
      <div className="bg-white pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                      font-semibold text-gray-900 
                      leading-tight tracking-tight">
            App-solute <br />
            <span className="block mt-2 sm:mt-4">Ambition?</span>
          </h2>
          <p className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 
                     text-xl sm:text-2xl 
                     font-bold text-gray-700">
            Let's turn your business vision into a thriving reality.
          </p>
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <button className="relative overflow-hidden wave-btn group 
                           px-6 sm:px-8 md:px-10 
                           py-3 sm:py-4 
                           text-sm sm:text-base 
                           font-satoshi text-white 
                           bg-[#282D3C] hover:bg-[#151A27] 
                           transition-all duration-500 
                           shadow-md hover:shadow-xl 
                           transform hover:scale-105">
              <span className="relative z-10 block 
                           transition-transform duration-500 
                           group-hover:-translate-y-full">
                get a quote
              </span>
              <span className="absolute top-full left-0 w-full 
                           text-center z-10 
                           transition-all duration-500 
                           group-hover:top-1/2 group-hover:-translate-y-1/2 
                           opacity-0 group-hover:opacity-100">
                get a quote
              </span>
            </button>
            <div className="h-24 sm:h-32 md:h-44"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServicesScroll;