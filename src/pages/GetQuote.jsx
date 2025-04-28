import React, { useState } from "react";
import animation from "../Images/animation.jpg";
import lexLogo from "../Images/lexLogo.svg";

const GetQuote = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
  });

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      services: selectedServices,
      budget: selectedBudget,
      ...formData,
    });
  };

  const serviceOptions = [
    { id: "mobile", label: "Mobile App Development" },
    { id: "web", label: "Web App Development" },
    { id: "desktop", label: "Desktop App Development" },
    { id: "crypto", label: "Crypto & Blockchain" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "frontend", label: "Front End Development" },
    { id: "backend", label: "Back End Development" },
    { id: "devops", label: "DevOps" },
    { id: "ux", label: "UX Research" },
    { id: "design", label: "Product Design" },
    { id: "other", label: "Other" },
  ];

  const budgetOptions = [
    { id: "10k-25k", label: "10k - 25k USD" },
    { id: "25k-50k", label: "25k - 50k USD" },
    { id: "50k-100k", label: "50k - 100k USD" },
    { id: "100k-plus", label: "100k+ USD" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-8 sm:pt-12 md:pt-16">
      {/* Left side - Image */}
      <div
        className="w-1/3 bg-indigo-900 
                    relative overflow-hidden 
                    min-h-[300px] md:min-h-screen"
      >
        <img
          src={animation}
          alt="Quote Illustration"
          className="object-cover h-full w-full 
                   absolute inset-0 
                   transform-gpu will-change-transform 
                   transition-transform duration-700 
                   hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Right side - Form */}
      <div
        className="w-full md:w-3/4 
                    p-6 sm:p-8 md:p-12 lg:p-20 
                    flex flex-col 
                    bg-white"
      >
        <div className="max-w-4xl mb-8 sm:mb-12">
          <img src={lexLogo} className="w-48 h-12 mb-12" alt="" />
          <h2
            className="text-2xl sm:text-3xl md:text-4xl 
                      font-semibold text-gray-800 
                      mb-4 sm:mb-6 
                      leading-tight"
          >
            Let's build an awesome project together.
          </h2>
          <p
            className="text-base sm:text-lg 
                     text-gray-600 font-xs 
                     leading-relaxed"
          >
            Describe your project and leave us your contact info, we'll get back
            to you within 24 hours.
          </p>
        </div>

        <form
          className="flex-1 flex flex-col space-y-8 max-w-4xl"
          onSubmit={handleSubmit}
        >
          {/* Services Grid */}
          <div>
            <label className="block text-lg sm:text-xl text-gray-500 mb-4">
              What do you need?
            </label>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                         gap-3 sm:gap-4"
            >
              {serviceOptions.map((service) => (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`border-2 
                           p-3 sm:p-4 
                           text-center 
                           cursor-pointer 
                           transition-all duration-300 
                           hover:shadow-md
                           ${
                             selectedServices.includes(service.id)
                               ? "border-blue-500 bg-blue-50"
                               : "border-gray-300 hover:border-blue-300"
                           }`}
                >
                  {service.label}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-lg sm:text-xl text-gray-500">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Jonathan Liandi"
                className="w-full border-b-2 border-gray-300 
                        p-2 
                        transition-colors duration-300
                        focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg sm:text-xl text-gray-500">
                Your email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ex: jonathanliandi@company.io"
                className="w-full border-b-2 border-gray-300 
                        p-2 
                        transition-colors duration-300
                        focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-8">
            <label className="block text-lg sm:text-xl text-gray-500 mb-2">
              Tell us about the project
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              rows="4"
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Budget Estimation */}
          <div className="mb-8">
            <label className="block text-lg sm:text-xl text-gray-500 mb-4">
              Budget estimation (USD)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {budgetOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleBudgetSelect(option.id)}
                  className={`border-2 ${
                    selectedBudget === option.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  } p-4 text-center cursor-pointer hover:border-blue-300 transition-colors`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>

          {/* reCAPTCHA Mock */}
          <div className="mb-8">
            <div className="border border-gray-300 p-4 w-full md:w-auto inline-block">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>I'm not a robot</span>
                <div className="ml-auto">
                  <div className="text-xs text-gray-500">reCAPTCHA</div>
                  <div className="text-xs text-gray-400">Privacy - Terms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-black text-white 
                     py-3 sm:py-4 
                     px-6 sm:px-8 
                     text-base sm:text-lg 
                     font-medium 
                     transform transition-all duration-300 
                     hover:bg-gray-800 hover:scale-[1.02] 
                     focus:outline-none focus:ring-2 focus:ring-gray-800 
                     active:scale-[0.98]"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
