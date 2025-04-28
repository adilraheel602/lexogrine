import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Images/logo.svg";

const navLinks = ["our work", "about us", "services", "workshops"];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);
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
      className={`fixed top-0 inset-x-0 z-50 
                bg-white/80 backdrop-blur-md 
                px-3 xs:px-4 sm:px-6 lg:px-10 
                py-3 xs:py-4 sm:py-5 lg:py-6 
                flex justify-between items-center 
                transition-all duration-500 
                ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
                ${scrolled ? "shadow-sm border-b border-gray-200" : "shadow-none border-none"}`}
    >
      {/* Logo with enhanced responsiveness */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          className="w-20 xs:w-24 sm:w-28 lg:w-32 
                   ml-2 xs:ml-4 sm:ml-8 lg:ml-20 
                   mt-4 xs:mt-6 sm:mt-8 
                   cursor-pointer transition duration-300 
                   hover:animate-magic-text 
                   hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          alt="Logo"
          loading="eager"
        />
      </Link>

      {/* Mobile Menu Button with better touch target */}
      <button
        className="md:hidden p-2.5 rounded-lg 
                 hover:bg-gray-100 active:bg-gray-200 
                 transition-colors duration-200 
                 touch-manipulation"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
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

      {/* Desktop Navigation with improved spacing */}
      <ul className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-20 
                   mt-4 xs:mt-6 sm:mt-8 
                   text-sm lg:text-base 
                   font-semibold text-gray-800">
        {navLinks.map((text, i) => (
          <li
            key={i}
            className={`relative group cursor-pointer overflow-hidden h-6 wave-link 
                     transition-colors duration-200 
                     ${location.pathname === `/${text.replace(/\s/g, "-")}` ? "text-sky-300" : ""}`}
          >
            <Link to={`/${text.replace(/\s/g, "-")}`}>
              <span className="block relative z-10 transition-all duration-300 
                           transform group-hover:-translate-y-full group-hover:opacity-0">
                {text}
              </span>
              <span className="absolute left-0 top-full block z-10 
                           transition-all duration-300 
                           transform group-hover:top-0 group-hover:opacity-100 opacity-0">
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation with improved transitions */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 
                  bg-white/95 backdrop-blur-md 
                  transition-all duration-300 
                  shadow-lg border-b border-gray-100
                  ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="px-4 py-4 space-y-4">
          {navLinks.map((text, i) => {
            const linkPath = `/${text.replace(/\s/g, "-")}`;
            const isActive = location.pathname === linkPath;
            return (
              <li
                key={i}
                className={`text-base font-semibold transition-colors ${
                  isActive ? "text-sky-300" : "text-gray-800 hover:text-purple-600"
                }`}
              >
                <Link to={linkPath}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA Button with enhanced responsiveness */}
      <Link to="/get-quote" className="mt-2 xs:mt-3 sm:mt-4 mr-2 xs:mr-4 sm:mr-8 lg:mr-20">
        <button
          className={`relative overflow-hidden wave-btn group 
                   text-white 
                   px-3 xs:px-4 sm:px-5 lg:px-6 
                   py-2 xs:py-2.5 sm:py-3 lg:py-4 
                   text-xs xs:text-sm lg:text-base 
                   font-satoshi font-thin 
                   transition-all duration-300 
                   shadow-md hover:shadow-lg 
                   rounded-sm
                   ${location.pathname === "/get-quote"
                     ? "bg-sky-300 hover:bg-sky-400"
                     : "bg-[#9063E8] hover:bg-[#7345CA]"
            }`}
        >
          <span className="relative z-10 block transition-transform duration-300 
                       transform group-hover:-translate-y-full group-hover:opacity-0">
            get a quote
          </span>
          <span className="absolute top-full left-0 w-full text-center z-10 
                       transition-all duration-300 
                       transform group-hover:top-4 group-hover:opacity-100 opacity-0">
            get a quote
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;