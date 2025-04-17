import React from "react";
import helloGo from "../Images/helloGo.png";
import reasonal from "../Images/reasonal.png";
import redBull from "../Images/redBull.png";
import surfShark from "../Images/surfShark.png";
import ubiSoft from "../Images/ubiSoft.png";

const WavyBackground = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* SVG curved line background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1440 560"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="#E5E7EB" strokeWidth="1">
          {[...Array(22)].map((_, i) => {
            const y = i * 24 + 20;
            const wave = (i - 11) ** 2; // creates a bump in the center
            return (
              <path
                key={i}
                d={`
                  M 0 ${y}
                  C 480 ${y + wave * 0.03},
                    960 ${y - wave * 0.03},
                    1440 ${y}
                `}
              />
            );
          })}
        </g>
      </svg>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center leading-tight">
          The Who's Who of Happy Clients
        </h1>
      </div>

      {/* Logo Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-12 lg:mt-16">
          {[helloGo, reasonal, redBull, surfShark, ubiSoft].map(
            (logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-6 sm:h-8 lg:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
