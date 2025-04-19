import { motion } from "framer-motion";
import clutch from "../Images/clutch.svg";

export default function Footer() {
  const bubbles = Array.from({ length: 25 }).map((_, i) => ({
    size: Math.random() * 15 + 10,
    left: Math.random() * 100 + "%",
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1.5,
    key: i,
  }));

  return (
    <div className="relative w-full">
      {/* Boiling Water Drops Effect */}
      <div className="absolute -top-20 left-0 w-full h-60 z-20 pointer-events-none overflow-visible">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.key}
            className="absolute bottom-0 rounded-full bg-white"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              filter: "blur(2px)",
              mixBlendMode: "exclusion",
            }}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{ y: -100, opacity: 0 }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        ))}
      </div>

      {/* Footer Content */}
      <footer className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 rounded-t-[60px] sm:rounded-t-[100px] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-3xl sm:text-4xl font-bold text-white">E</div>
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-light text-gray-400">
                We are the
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-purple-400">
                Digital Heartbeat
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              2023 LEXOGRINE®. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="text-base sm:text-lg font-semibold">Menu</h4>
            <ul className="text-gray-400 space-y-2">
              {["Our Work", "About us", "Services"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="text-base sm:text-lg font-semibold">Contact</h4>
            <ul className="text-gray-400 space-y-2">
              {["Get a Quote", "Say Hi"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center sm:justify-start">
            <p className="text-xs sm:text-sm text-white">REVIEWED ON</p>
            <img src={clutch} alt="Clutch" className="h-4 sm:h-5" />
            <div className="flex items-center gap-0.5 sm:gap-1 text-lg sm:text-xl text-red-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white">25 REVIEWS</p>
          </div>

          <div className="flex gap-4 sm:gap-6 text-lg sm:text-xl text-gray-400">
            {["in", "⚽", "f"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
