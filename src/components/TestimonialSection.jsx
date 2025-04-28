import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clutch from "../Images/clutch.svg";
import rating from "../Images/rating.svg";
import profile from "../Images/profile.svg";
const testimonials = [
  {
    logo: clutch,
    platform: "Clutch",
    rating: 5,
    reviews: 25,
    text: "Lexogrine was even able to add features and improve the platform’s speed in a mere week!",
    avatar: profile,
    name: "Utkarsh Upadhyay",
    title: "CO-FOUNDER & CTO, REASONAL",
  },
  {
    logo: "/logos/google.png",
    platform: "Google",
    rating: 4,
    reviews: 80,
    text: "The collaboration and final product exceeded our expectations. Highly recommend the team!",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    name: "Sarah Lin",
    title: "Marketing Lead, HelloGo",
  },
  {
    logo: "/logos/trustpilot.png",
    platform: "Trustpilot",
    rating: 5,
    reviews: 102,
    text: "Reliable, fast and deeply professional. Great communication throughout the project.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    name: "Daniel West",
    title: "Product Manager, RedBull",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const testimonial = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="flex flex-col items-start justify-center 
                     min-h-screen 
                     px-4 sm:px-8 md:px-16 lg:px-24 
                     py-12 sm:py-16 md:py-20 lg:py-24 
                     text-center bg-white">
      {/* Platform Logo + Stars + Reviews */}
      <div className="flex flex-col items-center sm:items-start 
                    space-y-4 sm:space-y-6 
                    w-full max-w-7xl mx-auto">
        {/* Logo with improved sizing */}
        <div className="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
          <img
            src={testimonial.logo}
            alt={testimonial.platform}
            className="h-6 sm:h-7 md:h-8 lg:h-10 
                     object-contain 
                     transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Ratings & Reviews with enhanced styling */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex space-x-1 sm:space-x-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-base sm:text-lg md:text-xl 
                        transition-colors duration-300 
                        ${i < testimonial.rating ? "text-red-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-base sm:text-lg 
                        font-medium 
                        bg-fuchsia-700 text-gray-800 
                        px-2 sm:px-3 py-0.5 sm:py-1 
                        rounded 
                        transition-all duration-300">
            {testimonial.rating}.0
          </span>
          <span className="hidden sm:block w-px h-4 sm:h-5 bg-gray-400" />
          <span className="text-xs sm:text-sm md:text-base 
                        text-black bg-red-300 
                        px-2 sm:px-3 py-0.5 sm:py-1 
                        rounded 
                        transition-all duration-300">
            {testimonial.reviews} Reviews
          </span>
        </div>
      </div>

      {/* Testimonial Text with improved typography */}
      <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 
                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                 font-light text-left text-gray-800 
                 max-w-5xl mx-auto 
                 leading-snug sm:leading-tight 
                 transition-all duration-300">
        "{testimonial.text}"
      </p>

      {/* Avatar with enhanced styling */}
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 
                    flex items-center space-x-4 sm:space-x-5 
                    max-w-5xl mx-auto">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                     overflow-hidden rounded-full 
                     ring-2 ring-gray-200 
                     transition-all duration-300 
                     hover:ring-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 
                     text-sm sm:text-base md:text-lg 
                     transition-all duration-300">
            {testimonial.name}
          </p>
          <p className="text-xs sm:text-sm md:text-base 
                     text-gray-600 
                     transition-all duration-300">
            {testimonial.title}
          </p>
        </div>
      </div>

      {/* Navigation Arrows with improved interaction */}
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 
                    flex justify-between 
                    w-full max-w-6xl mx-auto 
                    px-4 sm:px-6">
        <button
          className="p-2 sm:p-3 
                   hover:bg-gray-100 
                   rounded-full 
                   transition-all duration-300 
                   focus:outline-none focus:ring-2 focus:ring-gray-400 
                   active:scale-95"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 
                             cursor-pointer 
                             text-gray-600 hover:text-black 
                             transition-colors duration-300" />
        </button>
        <button
          className="p-2 sm:p-3 
                   hover:bg-gray-100 
                   rounded-full 
                   transition-all duration-300 
                   focus:outline-none focus:ring-2 focus:ring-gray-400 
                   active:scale-95"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 
                              cursor-pointer 
                              text-gray-600 hover:text-black 
                              transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
}
