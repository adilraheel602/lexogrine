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
    <section className="flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16 text-center">
      {/* Platform Logo + Stars + Reviews */}
      <div className="flex flex-col items-center sm:items-start space-y-4 w-full">
        {/* Logo */}
        <div className="w-full sm:w-auto">
          <img
            src={testimonial.logo}
            alt={testimonial.platform}
            className="h-6 sm:h-7 lg:h-8 object-contain"
          />
        </div>

        {/* Ratings & Reviews */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-base sm:text-lg ${
                  i < testimonial.rating ? "text-red-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-base sm:text-lg font-medium bg-fuchsia-700 text-gray-800 px-2 py-0.5 rounded">
            {testimonial.rating}.0
          </span>
          <span className="hidden sm:block w-px h-4 bg-gray-400" />
          <span className="text-xs sm:text-sm text-black bg-red-300 px-2 py-0.5 rounded">
            {testimonial.reviews} Reviews
          </span>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="mt-6 sm:mt-8 lg:mt-10 text-2xl sm:text-3xl lg:text-4xl font-light text-left text-gray-800 max-w-5xl leading-snug">
        {testimonial.text}
      </p>

      {/* Avatar */}
      <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center space-x-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm sm:text-base">
            {testimonial.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            {testimonial.title}
          </p>
        </div>
      </div>

      {/* Arrows */}
      <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-between w-full max-w-6xl px-4 text-gray-600">
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer hover:text-black transition-colors" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer hover:text-black transition-colors" />
        </button>
      </div>
    </section>
  );
}
