import React from "react";
import strategyImage from "../Images/strategy.jpg";

const StrategySection = () => {
  const items = [
    "Analyze Customer Needs",
    "Value Proposition",
    "UX Audits",
    "Comprehensive Interviews",
    "Customer Journey Mapping",
    "Product Concepts",
    "Information Architecture",
    "Digital Strategy",
  ];

  return (
    <section className="w-full bg-white 
                      py-16 sm:py-20 md:py-24 lg:py-32 
                      px-4 sm:px-6 md:px-8 lg:px-16 
                      flex flex-col-reverse md:flex-row 
                      items-center justify-between 
                      gap-8 sm:gap-12 md:gap-16">
      {/* Left: Textual Content */}
      <div className="w-full md:w-1/2 
                    mt-12 md:mt-0 
                    md:pr-8 lg:pr-12 
                    text-left 
                    space-y-6 sm:space-y-8 md:space-y-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] 
                    font-semibold text-[#1E1E1E] 
                    leading-tight sm:leading-none">
          Strategy
        </h2>
        <p className="text-base sm:text-lg md:text-xl 
                   text-[#3C3C3C] 
                   max-w-2xl 
                   leading-relaxed">
          Build not only a successful product but also a powerful and memorable brand.
          We're using a balanced combination of well-known patterns, innovation,
          and user insights.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                     gap-6 sm:gap-8 md:gap-10">
          {items.map((item, i) => (
            <div key={i} 
                 className="flex flex-col items-start 
                          group 
                          transition-all duration-300">
              <div className="w-full border-t border-gray-400 
                          mb-2 sm:mb-3 
                          transition-colors duration-300 
                          group-hover:border-[#6474E5]" />
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base md:text-lg 
                        leading-snug 
                        max-w-[14rem] 
                        transition-colors duration-300 
                        group-hover:text-[#6474E5]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Curved Image */}
      <div className="w-full md:w-1/2 
                    flex justify-center 
                    transform transition-transform duration-500 
                    hover:scale-[1.02]">
        <div className="w-[90%] max-w-md 
                     aspect-square 
                     overflow-hidden 
                     shadow-lg hover:shadow-xl 
                     transition-shadow duration-300">
          <svg viewBox="0 0 100 100" 
               preserveAspectRatio="none" 
               className="w-full h-full">
            <defs>
              <clipPath id="clipPathStrategy" 
                       clipPathUnits="objectBoundingBox">
                <path d="M0,1 C0.1,0,0.9,0,1,1 Z" />
              </clipPath>
            </defs>
            <image
              href={strategyImage}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clipPathStrategy)"
              className="transform transition-transform duration-500 
                      hover:scale-105"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
