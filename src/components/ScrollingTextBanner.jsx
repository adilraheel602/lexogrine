import React from "react";
import stars from "../Images/stars.svg";
import symbol from "../Images/symbol.svg";
import credit from "../Images/credit.svg";
import credit01 from "../Images/credit01.svg";
import credit02 from "../Images/credit02.svg";

const ScrollingTextBanner = () => {
  const repeatedText = "test your idea     ";

  return (
    <div className="w-full bg-white">
      {/* Scrolling Text Banner */}
      <div className="overflow-hidden whitespace-nowrap 
                    py-4 sm:py-5 md:py-6 lg:py-8">
        <div className="flex animate-scroll-loop transform-gpu will-change-transform">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] 
                      font-bold text-[#ED7161] 
                      whitespace-nowrap 
                      transition-all duration-300"
            >
              {repeatedText.repeat(20)}
            </span>
          ))}
        </div>
      </div>

      {/* Time Estimate Section */}
      <div className="w-full flex flex-col items-center justify-center 
                    py-16 sm:py-20 md:py-24 
                    px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center 
                     gap-8 sm:gap-12 md:gap-16 
                     relative mb-8 sm:mb-10">
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 
                       font-semibold text-[#1E1E1E] 
                       tracking-tight">
              3 weeks
            </h2>
            <p className="text-sm sm:text-base md:text-lg 
                       mt-2 sm:mt-3 
                       text-[#2E2E2E]">
              For the prototype
            </p>
          </div>
          <div className="h-12 sm:h-14 md:h-16 w-px bg-gray-300 hidden md:block" />
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 
                       font-semibold text-[#1E1E1E] 
                       tracking-tight">
              2 months
            </h2>
            <p className="text-sm sm:text-base md:text-lg 
                       mt-2 sm:mt-3 
                       text-[#2E2E2E]">
              For the MVP
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-6 
                     group cursor-pointer 
                     transform transition-all duration-300 hover:scale-105">
          <p className="text-base sm:text-lg md:text-xl 
                     font-semibold text-[#1E1E1E] 
                     group-hover:text-[#9E7BFF] 
                     transition-colors duration-300">
            Brief us
          </p>
          <div className="w-8 h-8 sm:w-10 sm:h-10 
                       bg-[#9E7BFF] 
                       rounded-full 
                       flex items-center justify-center 
                       transform transition-all duration-300 
                       group-hover:bg-[#8A63FF]">
            {/* ...existing SVG... */}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="w-full 
                       px-4 sm:px-6 md:px-8 lg:px-12 
                       py-16 sm:py-20 md:py-24 lg:py-32 
                       bg-white text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    font-semibold text-[#1E1E1E] 
                    mb-4 sm:mb-6 md:mb-8 
                    tracking-tight">
          Voices of trust <br className="hidden sm:block" />
          and satisfaction
        </h2>

        {/* ...existing Rating section... */}

        {/* Cards with improved grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                     gap-6 sm:gap-8 md:gap-10 
                     mt-12 sm:mt-16 
                     text-left 
                     max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="border-t border-black pt-6">
            <p className="text-lg font-semibold text-[#1E1E1E] mb-4">
              They’ve stepped out of their way to deliver things out of their interest for the project.
            </p>
            <div className="flex items-center gap-3">
              <img src={credit} alt="GLHF" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-[#1E1E1E]">Petter Sjöstrand</p>
                <p className="text-sm text-gray-500">CREATIVE DIRECTOR, GLHF</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border-t border-black pt-6">
            <p className="text-lg font-semibold text-[#1E1E1E] mb-4">
              One of the best agency experiences we have had bar none.
            </p>
            <div className="flex items-center gap-3">
              <img src={credit01} alt="Webbabyshower" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-[#1E1E1E]">Kurt Perschke</p>
                <p className="text-sm text-gray-500">FOUNDER, WEBBABYSHOWER</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="border-t border-black pt-6">
            <p className="text-lg font-semibold text-[#1E1E1E] mb-4">
              Lexogrine was even able to add features and improve the platform’s speed in a mere week!
            </p>
            <div className="flex items-center gap-3">
              <img src={credit02} alt="Reasonal" className="w-6 h-6" />
              <div>
                <p className="font-semibold text-[#1E1E1E]">Utkarsh Upadhyay</p>
                <p className="text-sm text-gray-500">CO-FOUNDER & CTO, REASONAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollingTextBanner;
