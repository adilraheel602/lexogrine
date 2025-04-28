import React from "react";

const Services = () => {
  const services = [
    {
      title: "Product Design",
      description: "Beautiful, intuitive interfaces that users love.",
    },
    {
      title: "Development",
      description: "Robust, scalable solutions built with modern technologies.",
    },
    {
      title: "AI Solutions",
      description:
        "Leveraging artificial intelligence to solve complex problems.",
    },
  ];

  return (
    <section id="services" 
             className="py-12 sm:py-16 md:py-20 lg:py-24 
                      px-4 sm:px-6 md:px-8 lg:px-12 
                      text-center 
                      bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl 
                   font-bold text-gray-800 
                   mb-8 sm:mb-10 md:mb-12 lg:mb-16 
                   tracking-tight">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto 
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                    gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white 
                     p-6 sm:p-7 md:p-8 
                     rounded-lg 
                     shadow-md hover:shadow-xl 
                     hover:-translate-y-2 
                     transition-all duration-300 
                     transform-gpu will-change-transform"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl 
                        font-semibold text-blue-600 
                        mb-3 sm:mb-4 
                        tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg 
                       text-gray-600 
                       leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
