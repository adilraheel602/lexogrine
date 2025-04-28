import React from "react";
import workshop from "../Images/workshop.jpg";
import IngredientsOfWorkshops from "../components/IngredientsOfWorkshops";
import HelloGoCaseStudy from "../components/HelloGoCaseStudy";
import CompleteProjectRoadmap from "../components/CompleteProjectRoadmap";
import ScrollingTextBanner from "../components/ScrollingTextBanner";
import mark from "../Images/mark.svg";
import react from "../Images/react.svg";
import nodejs from "../Images/javascript.svg";
import pytorch from "../Images/pytorch.svg";
import llm from "../Images/llm.svg";
import aws from "../Images/aws.svg";

const Workshops = () => {
  const techStack = [
    { name: "React Native", icon: react },
    { name: "Node.js", icon: nodejs },
    { name: "PyTorch", icon: pytorch },
    { name: "LLM", icon: llm },
    { name: "AWS", icon: aws },
    { name: "React", icon: react },
    { name: "React Native", icon: react },
    // Add more technologies as needed
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full 
                   py-16 md:py-24 lg:py-32 
                   px-4 sm:px-6 lg:px-8 
                   bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center 
                       gap-8 md:gap-12 lg:gap-16">
            {/* Left side content */}
            <div className="w-full md:w-1/2 
                        pr-0 md:pr-12 
                        mb-10 md:mb-0">
              <h3 className="uppercase 
                         text-sm md:text-base 
                         font-medium tracking-wider 
                         text-gray-700 
                         mb-4">
                WORKSHOPS
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                         font-bold text-gray-900 
                         leading-tight 
                         mb-6">
                Where ideas
                <br />
                come to life
              </h1>
              <p className="text-base sm:text-lg 
                        text-gray-600 
                        leading-relaxed">
                Our most experienced and talented people will help you harden
                your idea and prepare a clear plan for its delivery. You are in
                good hands.
              </p>
            </div>

            {/* Right side image with improved responsiveness */}
            <div className="w-full md:w-1/2 
                        relative 
                        overflow-hidden 
                        min-h-[300px] sm:min-h-[400px]">
              <div className="absolute inset-0 
                          bg-white 
                          rounded-bl-[100%] rounded-tl-[100%] 
                          transform-gpu will-change-transform" />
              <img
                src={workshop}
                alt="3D abstract objects"
                className="relative z-10 
                        w-[140%] h-auto 
                        rounded-br-[820px] 
                        overflow-hidden 
                        max-w-2xl -ml-10 
                        object-cover 
                        transform-gpu will-change-transform"
                loading="lazy"
              />
              <div className="absolute top-1/2 
                          transform -translate-y-1/2 
                          w-16 sm:w-20 md:w-24 
                          h-16 sm:h-20 md:h-24 
                          bg-gray-300 
                          rounded-full 
                          flex items-center justify-center 
                          shadow-xl z-20 
                          transition-transform duration-300 
                          hover:scale-105">
                <img
                  src={mark}
                  alt="Logo badge"
                  className="w-8 sm:w-10 md:w-12 
                         h-8 sm:h-10 md:h-12 
                         object-contain 
                         transform-gpu will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section with improved animation */}
      <div className="w-full 
                   py-16 md:py-20 
                   px-4 sm:px-6 lg:px-8 
                   bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 
                     font-bold text-center text-gray-800 
                     mb-12 sm:mb-16">
            Cutting-Edge Tech Stack
          </h2>
          <div className="overflow-hidden relative">
            <div className="flex w-max animate-scroll 
                        transform-gpu will-change-transform">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center 
                         min-w-[100px] sm:min-w-[120px] 
                         mx-3 sm:mx-4 
                         transition-transform duration-300 
                         hover:scale-105"
                >
                  <div className="w-12 sm:w-14 md:w-16 
                              h-12 sm:h-14 md:h-16 
                              flex items-center justify-center 
                              mb-3 sm:mb-4">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-10 sm:w-12 
                             h-10 sm:h-12 
                             object-contain 
                             opacity-70 
                             transition-opacity duration-300 
                             hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm sm:text-base 
                               text-gray-700 
                               text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <IngredientsOfWorkshops />
        <HelloGoCaseStudy />
        <CompleteProjectRoadmap />
        <ScrollingTextBanner />
      </div>

      {/* CTA Section with improved responsiveness */}
      <div className="bg-white 
                   pb-24 sm:pb-32 
                   px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl 
                     font-semibold text-gray-900 
                     leading-tight">
            App-solute <br />
            <span className="block mt-2 sm:mt-4">Ambition?</span>
          </h2>
          <p className="mt-12 sm:mt-16 md:mt-20 
                    text-xl sm:text-2xl 
                    font-bold text-gray-700">
            Let's turn your business vision into a thriving reality.
          </p>
          <div className="mt-24">
            {/* CTA Button */}
            <button className="relative overflow-hidden wave-btn group mt-4 text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-sm lg:text-base font-satoshi font-thin text-[0.5px] bg-[#282D3C] hover:bg-[#151A27] transition-all duration-500 shadow-md hover:shadow-lg">
              <span className="relative z-10 block transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
                get a quote
              </span>
              <span className="absolute top-full left-0 w-full text-center z-10 transition-all duration-500 transform group-hover:top-4 group-hover:opacity-100 opacity-0">
                get a quote
              </span>
            </button>
            <div className="mb-44"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshops;
