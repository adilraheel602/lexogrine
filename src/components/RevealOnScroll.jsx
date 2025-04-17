// components/RevealOnScroll.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '../animations';

const RevealOnScroll = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ ...fadeInUp.visible.transition, delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
