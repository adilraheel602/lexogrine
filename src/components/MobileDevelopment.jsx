import React from "react";
import mobiledev from "../Images/mobiledev.jpg";

const MobileDevelopment = () => {
  const features = [
    "Hybrid mobile app development - React Native and Flutter, Shared iOS/Android codebase, Faster porting between web and mobile, TypeScript-first development for improved code quality",
    "Native mobile app development: Swift and Kotlin",
    "AWS infrastructure integration"
  ];

  return (
    <section className="w-full bg-white 
                      py-16 sm:py-20 md:py-24 lg:py-32 
                      px-4 sm:px-6 md:px-8 lg:px-16 
                      flex flex-col lg:flex-row 
                      items-center justify-between 
                      gap-8 sm:gap-10 md:gap-12 lg:gap-20">
      {/* Left text area */}
      <div className="w-full lg:w-[55%] space-y-6 sm:space-y-8 md:space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl 
                     font-semibold text-[#1E1E1E] 
                     leading-tight tracking-tight">
          Mobile Development
        </h2>
        <p className="text-base sm:text-lg text-[#3C3C3C] 
                    max-w-2xl leading-relaxed">
          Build your mobile application for Android and iOS operating systems.
          Our experienced team specializes in both hybrid – React Native and
          Flutter – and native – Swift and Kotlin – technologies.
        </p>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {features.map((item, index) => (
            <div key={index} 
                 className="group flex flex-col items-start 
                          transition-all duration-300">
              <div className="w-full max-w-sm border-t border-[#1E1E1E] mb-2 
                           transition-all duration-300 
                           group-hover:border-purple-500" />
              <p className="font-medium text-[#1E1E1E] leading-relaxed 
                         text-sm sm:text-base md:text-lg 
                         transition-colors duration-300 
                         group-hover:text-purple-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right image with custom clipped shape */}
      <div className="w-full lg:w-[45%] transition-transform duration-500 
                    hover:scale-[1.02]">
        <svg
          viewBox="0 0 500 600"
          className="w-full h-auto shadow-lg hover:shadow-xl 
                   transition-shadow duration-300"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="mobile-clip" clipPathUnits="userSpaceOnUse">
              <path d="M 0 300 Q 0 0 250 0 Q 500 0 500 300 Q 500 600 250 600 Q 0 600 0 300 Z" />
            </clipPath>
          </defs>
          <image
            href={mobiledev}
            width="500"
            height="600"
            clipPath="url(#mobile-clip)"
            preserveAspectRatio="xMidYMid slice"
            className="transform transition-transform duration-700"
          />
        </svg>
      </div>
    </section>
  );
};

export default MobileDevelopment;