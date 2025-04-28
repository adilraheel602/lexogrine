import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1
      }}
      className="w-full 
               transform-gpu will-change-transform 
               motion-reduce:transition-none motion-reduce:transform-none"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
