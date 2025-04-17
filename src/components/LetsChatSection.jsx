import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LetsChatSection() {
  const [flipped, setFlipped] = useState(false);
  const [emojiStep, setEmojiStep] = useState(0);
  const emojis = ["👋", "💬", "✨", "🙂"];

  const handleHover = () => {
    setFlipped(true);
    let step = 0;
    const interval = setInterval(() => {
      setEmojiStep(step);
      step++;
      if (step > emojis.length) {
        clearInterval(interval);
        setTimeout(() => {
          setFlipped(false);
        }, 500);
      }
    }, 300);
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Top Text Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D2233] leading-tight">
          The Future <br className="sm:hidden" /> Awaits
        </h2>
        <p className="text-lg sm:text-xl text-[#1D2233] mt-3 sm:mt-4 font-semibold">
          Have a project? Let's talk.
        </p>
      </div>

      {/* Rotating Circle and Button Container */}
      <div
        onMouseEnter={handleHover}
        className="relative z-20 flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48"
      >
        {/* Rotating SVG Text */}
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          className="absolute"
          animate={{ rotate: flipped ? 360 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <defs>
            <path
              id="circlePath"
              d="M280,280 m-280,0 a280,280 0 1,1 200,0 a280,280 0 1,1 -200,0"
              fill="none"
            />
          </defs>
          <text
            fill="#888"
            fontSize="10"
            letterSpacing="2"
            className="select-none"
          >
            <textPath
              href="#circlePath"
              startOffset="0%"
              textAnchor="middle"
              className="hidden sm:inline"
            >
              DIGITAL TRANSFORMATION • IN-HOUSE DEVELOPMENT • NEW AMAZING
              PRODUCT •
            </textPath>
            <textPath
              href="#circlePath"
              startOffset="0%"
              textAnchor="middle"
              className="sm:hidden"
            >
              DIGITAL • DEVELOPMENT • PRODUCT •
            </textPath>
          </text>
        </motion.svg>

        {/* Let's Chat Button */}
        <motion.div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black text-white flex items-center justify-center text-center font-semibold text-xs sm:text-sm cursor-pointer hover:bg-gray-900 transition-colors duration-300 select-none"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {!flipped
            ? "LET'S CHAT"
            : emojiStep < emojis.length
            ? emojis[emojiStep]
            : "LET'S CHAT"}
        </motion.div>
      </div>
    </section>
  );
}
