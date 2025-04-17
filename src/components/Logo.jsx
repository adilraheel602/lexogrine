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
      className="flex text-2xl font-extrabold tracking-widest cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={container}
      initial="animate"
      animate="animate"
    >
      {logoText.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={letter}
          animate={hovered ? "exit" : "initial"}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Logo;
