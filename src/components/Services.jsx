import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Product Design",
      description: "Beautiful, intuitive interfaces that users love."
    },
    {
      title: "Development",
      description: "Robust, scalable solutions built with modern technologies."
    },
    {
      title: "AI Solutions",
      description: "Leveraging artificial intelligence to solve complex problems."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-2 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;