import React from "react";
import helloGo from "../Images/helloGo.png";
import reasonal from "../Images/reasonal.png";
import redBull from "../Images/redBull.png";
import surfShark from "../Images/surfShark.png";
import ubiSoft from "../Images/ubiSoft.png";

const WavyBackground = () => {
  return (
    <div className="relative w-full bg-white 
                  overflow-hidden 
                  py-16 sm:py-20 md:py-24 lg:py-32 
                  min-h-[40vh] sm:min-h-[50vh]">
      {/* SVG curved line background with improved responsiveness */}
      <svg
        className="absolute inset-0 w-full h-full z-0 
                 transform-gpu will-change-transform"
        viewBox="0 0 1440 560"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" 
           stroke="#E5E7EB" 
           strokeWidth="1" 
           className="transition-opacity duration-300">
          {[...Array(22)].map((_, i) => {
            const y = i * 24 + 20;
            const wave = (i - 11) ** 2;
            return (
              <path
                key={i}
                d={`
                  M 0 ${y}
                  C 480 ${y + wave * 0.03},
                    960 ${y - wave * 0.03},
                    1440 ${y}
                `}
                className="transition-all duration-500 ease-in-out"
              />
            );
          })}
        </g>
      </svg>

      {/* Foreground content with enhanced spacing */}
      <div className="relative z-10 
                    flex flex-col items-center justify-center 
                    px-4 sm:px-6 md:px-8 lg:px-12 
                    mx-auto max-w-7xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                    font-bold text-gray-800 
                    text-center 
                    leading-tight 
                    tracking-tight 
                    mb-8 sm:mb-12 md:mb-16">
          The Who's Who of Happy Clients
        </h1>
      </div>

      {/* Logo Row with improved grid and hover effects */}
      <div className="max-w-7xl mx-auto 
                    px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
                     gap-8 sm:gap-12 lg:gap-16 
                     mt-8 sm:mt-12 lg:mt-16">
          {[reasonal, helloGo, redBull, surfShark, ubiSoft].map(
            (logo, index) => (
              <div key={index} 
                   className="flex items-center justify-center 
                          transform transition-all duration-300 
                          hover:scale-105">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 
                         w-auto object-contain 
                         opacity-70 hover:opacity-100 
                         transition-all duration-300 
                         filter hover:brightness-110"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WavyBackground;
