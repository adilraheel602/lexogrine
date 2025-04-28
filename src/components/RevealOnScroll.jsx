// components/RevealOnScroll.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '../animations';

const RevealOnScroll = ({ children, delay = 0, threshold = 0.3, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: '-50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        ...fadeInUp.visible.transition,
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`transform-gpu will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
