import { motion } from "motion/react";

const Immersive: React.FC = () => {
  return (
    <div className="px-6 overflow-hidden backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 md:px-8">
      <div className="max-w-[1080px] mx-auto overflow-hidden">
        <motion.h2
          className="text-2xl font-bold text-center md:text-4xl"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Immersive
        </motion.h2>
        <motion.p
          className="px-10 py-8 text-center md:py-12"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          沉浸式学习体验。通过在线可演示的案例，你能获得更极致的学习收益
        </motion.p>
      </div>
    </div>
  );
};

export default Immersive;