import React from "react";
import img1 from "../Images/scrollup01.png";
import img2 from "../Images/scrollup02.png";
import img3 from "../Images/scrollup03.png";
import cicrcle from "../Images/circle.svg";
import commas from "../Images/commas.svg";

const HelloGoCaseStudy = () => {
  const images = [img1, img2, img3];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 
                      px-4 sm:px-6 md:px-12 lg:px-24 
                      flex flex-col lg:flex-row 
                      gap-8 sm:gap-12 md:gap-16 lg:gap-24 
                      items-center">
      {/* Left: Scrolling phone images */}
      <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] 
                    h-[600px] sm:h-[700px] md:h-[800px] 
                    overflow-hidden bg-[#E9EDF5] rounded-2xl 
                    flex items-center justify-center 
                    shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="flex flex-col gap-4 sm:gap-6 animate-scrollUp will-change-transform">
          {images.concat(images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`HelloGo App Interface ${index + 1}`}
              className="w-[180px] sm:w-[200px] md:w-[230px] 
                       rounded-lg shadow-md 
                       transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Right: Text section */}
      <div className="flex-1 max-w-xl space-y-6 sm:space-y-8">
        <h2 className="text-xs sm:text-sm font-semibold text-[#1E1E1E] tracking-wide uppercase">
          Featured Case Study
        </h2>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] leading-tight">
          HelloGo – innovative influencer <br className="hidden sm:block" />
          platform and marketplace
        </h2>
        
        <p className="text-base sm:text-lg text-[#3C3C3C] leading-relaxed">
          HelloGo is the next step in the influencer economy – sending and
          receiving offers to Go has never been easier! Thanks to this
          groundbreaking application you can both build strong bonds with your
          fans and monetize the followers. From the idea to the full platform
          design, development, and delivery – workshops were a vital part of the
          process.
        </p>
        
        <button className="inline-block bg-[#EEF0FD] text-[#1E1E1E] 
                        px-6 py-3 text-sm sm:text-base font-medium 
                        shadow-sm hover:shadow-md 
                        transition-all duration-300 
                        hover:bg-[#E2E6FC] hover:transform hover:scale-105">
          discover full case study
        </button>

        {/* Testimonial */}
        <div className="border-l-4 pl-4 sm:pl-6 border-[#D8D8D8] 
                      text-[#3C3C3C] italic 
                      text-base sm:text-lg 
                      relative mt-8 sm:mt-12">
          <img 
            className="absolute -top-4 -left-2 w-8 sm:w-10 opacity-50" 
            src={commas} 
            alt="Quote Symbol" 
          />
          "Lexogrine is an incredibly hardworking and dedicated group of
          individuals that I rarely see at development companies."
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mt-4">
          <img 
            src={cicrcle} 
            alt="Collin Siverts" 
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-[#1E1E1E] text-sm sm:text-base">
              Collin Siverts
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              FOUNDER, HELLOGO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloGoCaseStudy;
