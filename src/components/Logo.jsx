import { motion } from "framer-motion";
import { useState } from "react";

const logoText = "LEXOGRINE".split("");

const Logo = () => {
  const [hovered, setHovered] = useState(false);

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    initial: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex text-base xs:text-lg sm:text-xl md:text-2xl 
                font-extrabold tracking-widest cursor-pointer 
                select-none transition-all duration-300 
                hover:text-gray-800 focus:outline-none 
                py-2 px-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={container}
      initial="animate"
      animate="animate"
      role="button"
      tabIndex={0}
      aria-label="Lexogrine Logo"
    >
      {logoText.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block transform transition-transform duration-300"
          variants={letter}
          animate={hovered ? "exit" : "initial"}
          whileHover={{ scale: 1.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Logo;
