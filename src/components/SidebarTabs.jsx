import { motion } from 'framer-motion';

const SidebarTabs = () => (
  <div className="fixed right-0 top-1/3 z-50 
                hidden sm:block 
                transform-gpu will-change-transform">
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 120, 
        delay: 0.5,
        damping: 15 
      }}
      whileHover={{ x: -10 }}
      className="bg-teal-300 hover:bg-teal-400 
               text-white 
               w-10 sm:w-12 md:w-14 
               h-40 sm:h-44 md:h-48 
               rounded-l-lg 
               flex flex-col items-center justify-between 
               py-3 sm:py-4 md:py-5 
               cursor-pointer 
               shadow-md hover:shadow-lg 
               transition-all duration-300"
    >
      {/* Top text with responsive sizing */}
      <div className="text-base sm:text-lg md:text-xl 
                   font-bold 
                   transition-colors duration-300">
        W.
      </div>

      {/* Honors with improved rotation and spacing */}
      <div className="transform rotate-90 
                   -translate-x-1 sm:-translate-x-1.5 
                   mb-4 sm:mb-5 
                   text-xs sm:text-sm md:text-base 
                   font-medium tracking-wide uppercase 
                   whitespace-nowrap 
                   transition-all duration-300">
        Honors
      </div>
    </motion.div>
  </div>
);

export default SidebarTabs;
