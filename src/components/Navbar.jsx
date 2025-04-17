import logo from "../Images/logo.svg";
import React, { useEffect, useState } from "react";

const navLinks = ["our work", "about us", "services", "workshops"];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-6 flex justify-between items-center transition-all duration-500 shadow-sm ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img
        src={logo}
        className="w-24 sm:w-28 lg:w-32 cursor-pointer transition duration-300 hover:animate-magic-text hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
        alt="Logo"
      />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-base font-semibold text-gray-800">
        {navLinks.map((text, i) => (
          <li
            key={i}
            className="relative group cursor-pointer overflow-hidden h-6 wave-link"
          >
            <span className="block relative z-10 transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
              {text}
            </span>
            <span className="absolute left-0 top-full block z-10 transition-all duration-500 transform group-hover:top-0 group-hover:opacity-100 opacity-0">
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-300 shadow-lg ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="px-4 py-4 space-y-4">
          {navLinks.map((text, i) => (
            <li
              key={i}
              className="text-base font-semibold text-gray-800 hover:text-purple-600 transition-colors"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button className="relative overflow-hidden wave-btn group text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-sm lg:text-base font-satoshi font-semibold bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-500 shadow-md hover:shadow-lg">
        <span className="relative z-10 block transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
          get a quote
        </span>
        <span className="absolute top-full left-0 w-full text-center z-10 transition-all duration-500 transform group-hover:top-4 group-hover:opacity-100 opacity-0">
          get a quote
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
