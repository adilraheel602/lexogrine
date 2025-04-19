import { useEffect, useRef, useState } from "react";
import screen from "../Images/screen.png";
import screen01 from "../Images/screen01.png";
import screen02 from "../Images/screen02.png";
import screen03 from "../Images/screen03.png";
import screen04 from "../Images/screen04.png";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Unlocking health insights with AI",
    subtitle: "AI & Web & Mobile Development, Product Design",
    image: screen,
    tag: "Mysti AI",
    time: "24’",
  },
  {
    title: "Revolutionizing Energy Monitoring",
    subtitle: "IoT, Dashboard Design, Frontend",
    image: screen01,
    tag: "Volt IQ",
    time: "18’",
  },
  {
    title: "Smart Grid Integration",
    subtitle: "Energy, Infrastructure, Monitoring",
    image: screen02,
    tag: "Volt IQ",
    time: "18’",
  },
  {
    title: "The truly techy beverage",
    subtitle: "Mobile Development, Web, Product Design",
    image: screen03,
    tag: "Volt IQ",
    time: "18’",
  },
  {
    title: "Unlock AI Power do discover beauty products",
    subtitle: "AI & Mobile Development, Product Design",
    image: screen04,
    tag: "GLHF 22'",
    time: "18’",
  },
];

export default function ScrollContentSection() {
  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollTop = window.scrollY - wrapper.offsetTop;
      const sectionHeight = window.innerHeight;
      const totalHeight = sections.length * sectionHeight;

      // Calculate the current section index
      const newIndex = Math.floor(scrollTop / sectionHeight);
      if (newIndex !== index) {
        setShowTransition(true);
        setIndex(Math.min(Math.max(newIndex, 0), sections.length - 1));
        setTimeout(() => setShowTransition(false), 1000);
      }

      // Adjusted pinning logic with buffer
      const startPin = 0; // Start pinning when wrapper reaches top of viewport
      const endPin = totalHeight - sectionHeight + sectionHeight * 0.1; // Extend pinning slightly (10% buffer)

      // Pin the content when within the scrollable range
      const shouldPin = scrollTop >= startPin && scrollTop <= endPin;
      setIsPinned(shouldPin);

      // Optional: Debug scroll values
      // console.log({
      //   scrollTop,
      //   isPinned: shouldPin,
      //   index: newIndex,
      //   endPin,
      //   rectTop: rect.top,
      // });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [index]);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && showCursor) {
        cursorRef.current.style.left = `${e.clientX - 40}px`;
        cursorRef.current.style.top = `${e.clientY - 40}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [showCursor]);

  const current = sections[index];

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: `${sections.length * 100}vh` }}
    >
      <div
        className={`w-full h-screen z-30 transition-all duration-300 ${
          isPinned
            ? "fixed top-0"
            : `absolute ${index === sections.length - 1 ? "bottom-0" : "top-0"}`
        } flex flex-col lg:flex-row bg-white font-satoshi overflow-hidden`}
      >
        {/* CURTAIN WIPE TRANSITION */}
        <AnimatePresence>
          {showTransition && (
            <motion.div
              key={`wipe-${index}`}
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
                opacity: 1,
              }}
              exit={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-white z-10 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* LEFT: Scrollable Content with Animated Slide-Up */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`section-left-${index}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col border border-gray-400 px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 space-y-4 bg-white shadow-sm w-full max-w-md z-20"
            >
              <div className="text-xs sm:text-sm text-gray-800 flex items-center gap-2 sm:gap-3">
                <span className="font-semibold">{current.tag}</span>
                <span className="h-4 w-px bg-gray-400" />
                <span>{current.time}</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                {current.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-500">
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Image Window */}
        <div
          ref={imageContainerRef}
          className="w-full lg:w-1/2 bg-white items-center justify-center lg:mr-8 xl:mr-44 z-20 p-4 sm:p-6 lg:p-8 relative"
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`section-right-${index}`}
              initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
              animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
              exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="overflow-hidden shadow-2xl border border-gray-300 w-full h-full max-w-[95%] sm:max-w-[90%] max-h-[75%] sm:max-h-[85%] rounded-xl sm:rounded-xl mx-auto"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BUBBLE CURSOR */}
      {showCursor && (
        <div
          ref={cursorRef}
          className="fixed z-50 w-16 sm:w-20 h-16 sm:h-20 bg-purple-600 text-white rounded-full flex items-center justify-center pointer-events-none text-xs sm:text-sm font-semibold shadow-xl transition-all duration-300"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          View
        </div>
      )}
    </div>
  );
}