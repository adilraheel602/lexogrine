import { motion } from 'framer-motion';

const SidebarTabs = () => (
  <div className="fixed right-0 top-1/3 z-50">
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
      whileHover={{ x: -10 }}
      className="bg-teal-300 hover:bg-teal-400 text-white w-12 h-48 rounded-l-lg flex flex-col items-center justify-between py-4 cursor-pointer shadow-md"
    >
      {/* Top text */}
      <div className="text-lg font-bold">W.</div>

      {/* Honors rotated vertically */}
      <div className="transform rotate-90 mb-5 mr-5 origin-bottom text-sm font-medium">
        Honors
      </div>
    </motion.div>
  </div>
);

export default SidebarTabs;
