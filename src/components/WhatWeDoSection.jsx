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
  const [activeIndex, setActiveIndex] = useState(0); // Open first by default

  return (
    <section className="bg-[#15161A] text-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">What we do</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Lexogrine specializes in multiple types of services - from custom software development
            to team augmentation and body leasing. Our experienced team of experts will help you
            choose the right solution for your business.
          </p>
        </div>

        {/* Right Content - Accordion */}
        <div className="space-y-4 w-full">
          {services.map((service, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setActiveIndex(index === activeIndex ? -1 : index)
                }
                className="w-full text-left font-semibold text-white py-4 border-b border-gray-600 flex justify-between items-center focus:outline-none"
              >
                {service.title}
                <span className="transform transition-transform duration-300">
                  {index === activeIndex ? "−" : "+"}
                </span>
              </button>
              {index === activeIndex && service.content && (
                <div className="text-gray-400 text-sm py-2">
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
