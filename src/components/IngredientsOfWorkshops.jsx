import React from "react";

const IngredientsOfWorkshops = () => {
  const data = [
    {
      title: "Q&A Session",
      description:
        "Top-notch expertise and consultancy to fully understand the idea, and deliver prime solutions – Web, Mobile, AI, Machine Learning, AR/VR, and Internet of Things (IoT).",
    },
    {
      title: "UX Audits",
      description:
        "Discovery of business environment, business needs, project scope, and user experience patterns.",
    },
    {
      title: "Comprehensive Interviews",
      description:
        "Our experts will conduct user interviews to understand your market and user, as well as current gaps and niches you can fill, increasing the chances of success for your product.",
    },
    {
      title: "Product Concepts",
      description:
        "Our UX designers and product managers will assist in creating your product's concept, focusing on features, UI/UX, and brand design to highlight its strengths and visual appeal.",
    },
    {
      title: "Project scope of work & estimate",
      description:
        "In-depth project scope of work preparation - including user stories, tasks, and acceptance criteria - with dedicated estimates for each one of them.",
    },
    {
      title: "Delivery plan",
      description:
        "The overall idea for the project delivery - with crucial milestones.",
    },
  ];

  return (
    <section className="w-full bg-white 
                      py-12 sm:py-16 md:py-20 lg:py-24 
                      px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-center 
                   text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
                   font-semibold text-gray-800 
                   mb-12 sm:mb-16 md:mb-20 
                   tracking-tight">
        Ingredients of <br className="hidden sm:block" />
        Workshops
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 
                    px-4 sm:px-8 md:px-12 lg:px-40 
                    gap-y-12 sm:gap-y-16 md:gap-y-20 
                    gap-x-8 sm:gap-x-12 md:gap-x-16 
                    max-w-7xl mx-auto">
        {data.map((item, idx) => (
          <div key={idx} className="group transition-all duration-300 hover:transform hover:translate-y-[-4px]">
            <div className="border-t border-black 
                          mb-4 sm:mb-6 w-full 
                          transition-all duration-300 
                          group-hover:border-purple-600"></div>
            <h3 className="text-lg sm:text-xl md:text-2xl 
                         font-semibold text-gray-900 
                         mb-2 sm:mb-3 
                         transition-colors duration-300 
                         group-hover:text-purple-600">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base 
                       text-gray-500 
                       leading-relaxed 
                       max-w-xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IngredientsOfWorkshops;
