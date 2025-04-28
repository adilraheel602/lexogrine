import React from "react";

const Interactivity = () => {
  return (
    <div className="flex flex-col w-full 
                    min-h-screen 
                    py-12 sm:py-16 md:py-20 lg:py-24 
                    px-4 sm:px-6 md:px-8 lg:px-12 
                    items-center justify-center 
                    overflow-hidden 
                    bg-white">
      <section className="max-w-6xl mx-auto w-full">
        <h1 className="font-semibold 
                     text-pretty 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                     text-gray-800 
                     text-center 
                     leading-tight sm:leading-tight md:leading-tight 
                     tracking-tight
                     mb-6 sm:mb-8 md:mb-10">
          Made software
          <br className="hidden sm:block" /> 
          dreams a reality
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl 
                     text-gray-600 
                     text-center 
                     max-w-2xl 
                     mx-auto 
                     leading-relaxed">
          Transform your vision into powerful, scalable solutions with our 
          expert team of developers and designers.
        </p>
      </section>
    </div>
  );
};

export default Interactivity;
