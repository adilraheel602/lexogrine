import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LetsChatSection() {
  const [flipped, setFlipped] = useState(false);
  const [emojiStep, setEmojiStep] = useState(0);
  const controls = useAnimation();
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate("/get-quote");
  };

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen 
                      bg-white overflow-hidden 
                      flex flex-col items-center justify-center 
                      px-4 sm:px-6 md:px-8 lg:px-12 
                      py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Title Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                    font-extrabold text-[#1D2233] 
                    leading-tight tracking-tight">
          The Future <br className="sm:hidden" /> Awaits
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl 
                    text-[#1D2233]/90 
                    mt-3 sm:mt-4 md:mt-6 
                    font-semibold">
          Have a project? Let's talk.
        </p>
      </div>

      {/* Interactive Button Section */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48">
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          onMouseEnter={handleHover}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                     rounded-full bg-black text-white 
                     flex items-center justify-center 
                     text-center font-semibold 
                     text-sm sm:text-base 
                     cursor-pointer select-none 
                     shadow-lg hover:shadow-xl 
                     transition-shadow duration-300"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {!flipped
              ? "LET'S CHAT"
              : emojiStep < emojis.length
              ? emojis[emojiStep]
              : "LET'S CHAT"}
          </motion.div>
        </motion.div>

        {/* Rotating Text Circle */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            animate={controls}
            initial={{ rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
                className="hidden sm:inline opacity-75"
              >
                DIGITAL TRANSFORMATION • IN-HOUSE DEVELOPMENT • NEW AMAZING PRODUCT •
              </textPath>
              <textPath
                href="#circlePath"
                startOffset="0%"
                textAnchor="middle"
                className="sm:hidden opacity-75"
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
