import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function LetsChatSection() {
  const [flipped, setFlipped] = useState(false);
  const [emojiStep, setEmojiStep] = useState(0);
  const controls = useAnimation();
  const emojis = ["👋", "💬", "✨", "🙂"];

  const handleHover = () => {
    setFlipped(true);
    controls.start({ rotate: 360 });

    let step = 0;
    const interval = setInterval(() => {
      setEmojiStep(step);
      step++;
      if (step > emojis.length) {
        clearInterval(interval);
        setTimeout(() => {
          setFlipped(false);
          controls.set({ rotate: 0 });
        }, 500);
      }
    }, 300);
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D2233] leading-tight">
          The Future <br className="sm:hidden" /> Awaits
        </h2>
        <p className="text-lg sm:text-xl text-[#1D2233] mt-3 sm:mt-4 font-semibold">
          Have a project? Let's talk.
        </p>
      </div>

      <div className="relative w-48 h-48">
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          onMouseEnter={handleHover}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-center font-semibold text-sm sm:text-base cursor-pointer select-none shadow-lg"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1 }}
          >
            {!flipped
              ? "LET'S CHAT"
              : emojiStep < emojis.length
              ? emojis[emojiStep]
              : "LET'S CHAT"}
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            animate={controls}
            initial={{ rotate: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            
            <defs>
              <path
                id="circlePath"
                d="M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0"
                fill="none"
              />
            </defs>
            <text
              fill="#999"
              fontSize="9"
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
        </div>
      </div>
    </section>
  );
}