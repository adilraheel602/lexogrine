import React from "react";
import webdev from "../Images/webdev.jpg";
import webdev01 from "../Images/webdev01.png";
import webdev02 from "../Images/webdev02.png";

const WebDevelopment = () => {
  return (
    <>
      {/* Main Web & Software Development Section */}
      <section className="w-full bg-white 
                       py-12 sm:py-16 md:py-20 lg:py-24 
                       px-4 sm:px-6 md:px-8 lg:px-16 
                       flex flex-col-reverse lg:flex-row 
                       items-center justify-between 
                       gap-8 sm:gap-10 md:gap-12 lg:gap-20">
        {/* Left Text Area */}
        <div className="w-full lg:w-[55%] space-y-6 sm:space-y-8 md:space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                      font-semibold text-[#1E1E1E] 
                      leading-[1.1] tracking-tight">
            Web & Software <br /> Development
          </h2>
          <p className="text-base sm:text-lg 
                     text-[#3C3C3C] 
                     max-w-2xl 
                     leading-relaxed">
            Bring new digital products to the market or extend the existing ones with our
            experienced team of designers, developers, and testers. Build an MVP to test the
            idea or scale your development by adding our experienced specialists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                       gap-6 sm:gap-8 md:gap-10">
            {/* Grid items with hover effect */}
            <div className="group border-t border-black 
                        pt-2 sm:pt-3 
                        transition-all duration-300 
                        hover:border-purple-600">
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base 
                        transition-colors duration-300 
                        group-hover:text-purple-600">
                Full custom software development - web and desktop applications
              </p>
            </div>
            <div className="group border-t border-black 
                        pt-2 sm:pt-3 
                        transition-all duration-300 
                        hover:border-purple-600">
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base 
                        transition-colors duration-300 
                        group-hover:text-purple-600">
                Top-notch technologies: JavaScript and TypeScript, React, Vite, WebSockets, Vue,
                Angular, Node.js, Next.js, Prisma, Java, Python, PHP
              </p>
            </div>
            <div className="group border-t border-black 
                        pt-2 sm:pt-3 
                        transition-all duration-300 
                        hover:border-purple-600">
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base 
                        transition-colors duration-300 
                        group-hover:text-purple-600">
                AWS infrastructure integration
              </p>
            </div>
            <div className="group border-t border-black 
                        pt-2 sm:pt-3 
                        transition-all duration-300 
                        hover:border-purple-600">
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base 
                        transition-colors duration-300 
                        group-hover:text-purple-600">
                Third-party service integration - OAuth, Google APIs, and more
              </p>
            </div>
            <div className="group border-t border-black 
                        pt-2 sm:pt-3 
                        transition-all duration-300 
                        hover:border-purple-600">
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base 
                        transition-colors duration-300 
                        group-hover:text-purple-600">
                RWD implementation
              </p>
            </div>
            <div className="group border-t border-black 
                        pt-2 sm:pt-3 
                        transition-all duration-300 
                        hover:border-purple-600">
              <p className="font-semibold text-[#1E1E1E] 
                        text-sm sm:text-base 
                        transition-colors duration-300 
                        group-hover:text-purple-600">
                Cross-platform development (React + React Native + Electron)
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <button className="bg-[#EEF0FD] text-[#1E1E1E] 
                           px-6 sm:px-8 
                           py-2.5 sm:py-3 
                           text-sm sm:text-base 
                           font-medium 
                           shadow-sm hover:shadow-md 
                           transition-all duration-300 
                           hover:bg-[#E2E6FC] hover:transform hover:scale-105">
              read more
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="w-full lg:w-[45%] 
                     flex justify-center 
                     transform transition-transform duration-500 
                     hover:scale-[1.02]">
          <img
            src={webdev}
            alt="Web Development"
            className="max-w-full h-auto object-contain 
                     rounded-lg shadow-lg 
                     transition-shadow duration-300 
                     hover:shadow-xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Fixed Image with Scrolling Projects */}
      <section className="relative bg-white 
                       min-h-[120vh] 
                       px-4 sm:px-6 md:px-8 lg:px-16 
                       py-12 sm:py-16 md:py-20 lg:py-24 
                       flex flex-col lg:flex-row 
                       gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Fixed Left Image */}
        <div className="w-full lg:w-1/2 
                     lg:sticky lg:top-24 lg:h-fit">
          <div className="transform transition-transform duration-500 
                       hover:scale-[1.02]">
            <img 
              src={webdev01} 
              alt="HUDs Manager" 
              className="rounded-lg shadow-lg 
                       transition-shadow duration-300 
                       hover:shadow-xl 
                       w-full h-auto"
              loading="lazy"
            />
            <p className="text-base sm:text-lg md:text-xl 
                       font-semibold text-center 
                       mt-4 sm:mt-6 
                       text-[#1E1E1E]">
              All-in-one broadcast & HUDs Manager
            </p>
          </div>
        </div>

        {/* Scrolling Right Content */}
        <div className="w-full lg:w-1/2 
                     flex flex-col 
                     justify-center 
                     pl-0 lg:pl-10 
                     space-y-12 sm:space-y-16">
          <div className="flex flex-col items-start justify-center 
                       transform transition-transform duration-500 
                       hover:scale-[1.02]">
            <img
              src={webdev02}
              alt="Music Betting Platform"
              className="rounded-lg shadow-lg 
                       transition-shadow duration-300 
                       hover:shadow-xl 
                       w-full h-auto"
              loading="lazy"
            />
            <p className="text-base sm:text-lg md:text-xl 
                       font-semibold text-left 
                       mt-4 sm:mt-6 
                       text-[#1E1E1E]">
              The world's first music betting platform
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;