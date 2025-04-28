import { useState } from "react";

const services = [
  {
    title: "Web & Software Development",
    content:
      "Bring new digital products to the market or extend the existing ones with our experienced team of designers, developers, and testers. Build an MVP to test the idea or scale your development by adding our experienced specialists.",
  },
  {
    title: "Mobile Development",
    content: "",
  },
  {
    title: "AI & Data Science",
    content: "",
  },
  {
    title: "Design",
    content: "",
  },
  {
    title: "Strategy",
    content: "",
  },
];

export default function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#15161A] text-white 
                      py-12 sm:py-16 md:py-20 lg:py-24 
                      px-4 sm:px-6 md:px-12 lg:px-20 
                      overflow-hidden">
      <div className="max-w-7xl mx-auto 
                    grid grid-cols-1 md:grid-cols-2 
                    gap-8 sm:gap-10 md:gap-12 lg:gap-16 
                    items-start">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                      font-bold 
                      tracking-tight">
            What we do
          </h2>
          <p className="text-base sm:text-lg md:text-xl 
                     text-gray-300 
                     leading-relaxed 
                     max-w-2xl">
            Lexogrine specializes in multiple types of services - from custom software development
            to team augmentation and body leasing. Our experienced team of experts will help you
            choose the right solution for your business.
          </p>
        </div>

        {/* Right Content - Accordion */}
        <div className="space-y-2 sm:space-y-4 w-full">
          {services.map((service, index) => (
            <div key={index} 
                 className="transform transition-all duration-300 
                          hover:translate-x-1">
              <button
                onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                className="w-full text-left 
                        py-4 sm:py-5 
                        px-2 sm:px-3 
                        border-b border-gray-600 
                        flex justify-between items-center 
                        group 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 
                        rounded-sm"
              >
                <span className="font-semibold text-sm sm:text-base md:text-lg 
                             group-hover:text-purple-400 
                             transition-colors duration-300">
                  {service.title}
                </span>
                <span className="transform transition-transform duration-300 
                             text-lg sm:text-xl 
                             text-gray-400 group-hover:text-purple-400">
                  {index === activeIndex ? "−" : "+"}
                </span>
              </button>
              {index === activeIndex && service.content && (
                <div className="text-gray-400 
                            text-sm sm:text-base 
                            py-4 sm:py-5 
                            px-2 sm:px-3 
                            animate-fadeIn">
                  {service.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
