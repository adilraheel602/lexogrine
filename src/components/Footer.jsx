import { motion } from "framer-motion";

export default function Footer() {
  // 8 randomized "bubbles"
  const bubbles = Array.from({ length: 8 }).map((_, i) => ({
    size: Math.random() * 20 + 10,
    left: Math.random() * 90 + "%",
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
    key: i,
  }));

  return (
    <div className="relative w-full">
      {/* Bubble Animation Section */}
      <div>
        <div className="relative w-full h-36 sm:h-48 mt-16 sm:mt-24 bg-black rounded-t-[60px] sm:rounded-t-[100px] z-10 overflow-hidden">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.key}
              className="absolute bottom-0 opacity-30 filter blur-sm"
              style={{
                width: bubble.size * 3,
                height: bubble.size * 3,
                left: bubble.left,
              }}
              initial={{ y: 0, opacity: 0.3 }}
              animate={{ y: -100, opacity: 0 }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                fill="#fff"
              >
                <path
                  d="M45.3,-47.6C59.1,-33.8,70.7,-16.9,69.9,-1.1C69.2,14.8,56.1,29.6,42.3,42.1C28.6,54.6,14.3,64.8,-1.6,66.2C-17.6,67.5,-35.2,60.1,-44.3,47.1C-53.5,34,-54.3,15.4,-51.8,-2.3C-49.4,-19.9,-43.6,-36.5,-32.6,-50.1C-21.5,-63.7,-10.8,-74.4,2,-76.6C14.7,-78.8,29.4,-72.4,45.3,-60.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Left Column */}
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

          {/* Center Column - Menu */}
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

          {/* Right Column - Contact */}
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

        {/* Bottom Row */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Clutch Review */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center sm:justify-start">
            <p className="text-xs sm:text-sm text-white">REVIEWED ON</p>
            <img
              src="https://assets.clutch.co/static/images/logo--clutch.svg"
              alt="Clutch"
              className="h-4 sm:h-5"
            />
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

          {/* Social Icons */}
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
