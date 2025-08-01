import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clutch from "../Images/clutch.svg";
import logoFooter from "../Images/logoFooter.svg";

export default function Footer() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
   
      .footer-container {
        z-index: 1;
        --footer-background: #000000;
        display: grid;
        position: relative;
        grid-area: footer;
        min-height: 12rem;
      }
      .footer-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1rem;
        background: var(--footer-background);
        filter: url("#blob");
      }
      .footer-bubbles .bubble {
        position: absolute;
        left: var(--position, 50%);
        background: var(--footer-background);
        border-radius: 100%;
        animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
        transform: translate(-50%, 100%);
      }
      .footer-content {
        padding: 6rem 1rem 2rem;
        background: var(--footer-background);
        z-index: 2;
      }
      .footer-grid {
        max-width: 768px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        color: #fff;
      }
      .footer-title {
        margin-bottom: .25rem;
        font-size: 2.25rem;
      }
      .footer-subtitle {
        font-size: .875rem;
      }
      .footer-links {
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
        justify-content: center;
      }
      .footer-link {
        display: inline-block;
        transition: all 150ms ease-out;
      }
      .footer-link:hover:after {
        width: 100%;
      }
      .footer-link:after {
        content: '';
        display: block;
        margin: auto;
        height: 2px;
        width: 0;
        background-color: #fff;
        transition: width .25s ease-out;
      }
      .footer-socials {
        justify-self: flex-end;
      }
      .footer-social {
        font-size: 1.25rem;
        margin-right: 1.5rem;
      }
      .footer-social:hover {
        opacity: 0.8;
      }
      .footer-copy {
        text-align: center;
        background: var(--footer-background);
        font-size: .875rem;
        color: #dcdcdc;
        padding: 3rem 0 2rem;
      }
      @keyframes bubble-size {
        0%, 75% {
          width: var(--size, 4rem);
          height: var(--size, 4rem);
        }
        100% {
          width: 0;
          height: 0;
        }
      }
      @keyframes bubble-move {
        0% {
          bottom: -4rem;
        }
        100% {
          bottom: var(--distance, 10rem);
        }
      }
      @media screen and (max-width: 767px) {
        .footer-content {
          padding: 0 1.5rem;
        }
        .footer-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .footer-title {
          font-size: 1.5rem;
        }
        .footer-subtitle {
          font-size: .813rem;
        }
        .footer-links {
          flex-direction: column;
          row-gap: 1.5rem;
        }
        .footer-socials {
          justify-self: flex-start;
        }
      }
      @media screen and (max-width: 567px) {
        .footer-grid {
          grid-template-columns: repeat(1, 1fr);
          row-gap: 3.5rem;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <div className="main"></div>

      <div className="footer-container">
        <div className="footer-bubbles">
          {[...Array(100).keys()].map((_, index) => {
            const size = `${Math.random() * 4 + 2}rem`;
            const distance = `${Math.random() * 4 + 6}rem`;
            const position = `${Math.random() * 110 - 5}%`;
            const time = `${Math.random() * 2 + 2}s`;
            const delay = `${-Math.random() * 4}s`;

            return (
              <div
                key={index}
                className="bubble"
                style={{
                  "--size": size,
                  "--distance": distance,
                  "--position": position,
                  "--time": time,
                  "--delay": delay,
                }}
              />
            );
          })}
        </div>

        {/* Footer Content */}
        <footer className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Logo & Left Text */}
            <div className="space-y-4 sm:space-y-6 text-left">
              <img 
                className="w-10 h-14 sm:w-12 sm:h-16" 
                src={logoFooter} 
                alt="Lexogrine Logo" 
              />
              <div className="space-y-1 sm:space-y-2">
                <p className="text-2xl sm:text-3xl font-light text-gray-500 tracking-tight">
                  We are the
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 tracking-tight">
                  Digital Heartbeat
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 pt-6 sm:pt-8">
                2023 LEXOGRINE®. ALL RIGHTS RESERVED.
              </p>
            </div>

            {/* Menu */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold text-white tracking-wide">
                Menu
              </h4>
              <ul className="text-gray-500 space-y-2 sm:space-y-3">
                {["Our Work", "About us", "Services"].map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-base hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold text-white tracking-wide">
                Contact
              </h4>
              <ul className="text-gray-500 space-y-2 sm:space-y-3">
                {["Get a Quote", "Say Hi"].map((item, index) => (
                  <li
                    key={index}
                    className="text-sm sm:text-base hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row with clutch & socials */}
          <div className="max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-14 
                        flex flex-col sm:flex-row justify-between items-center 
                        gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Clutch Reviews */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
              <p className="text-xs sm:text-sm text-white font-medium">REVIEWED ON</p>
              <div className="flex items-center gap-1 text-lg sm:text-xl text-red-500">
                {Array(5).fill().map((_, i) => (
                  <span
                    key={i}
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    ★
                  </span>
                ))}
              </div>
              <img 
                src={clutch} 
                alt="Clutch Rating" 
                className="h-4 sm:h-5 object-contain" 
              />
              <p className="text-xs sm:text-sm text-white font-medium">
                25 REVIEWS
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 text-lg sm:text-xl text-gray-400">
              {["in", "⚽", "f"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-white transition-all duration-300 
                           hover:scale-110 transform p-2 hover:bg-gray-800/30 
                           rounded-full"
                  aria-label={
                    icon === "in" ? "LinkedIn" :
                    icon === "⚽" ? "Sports" :
                    "Facebook"
                  }
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>

      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
