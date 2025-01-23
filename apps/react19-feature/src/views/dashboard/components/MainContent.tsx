import { motion } from "motion/react";

const MainContent: React.FC = () => {
  return (
    <div className="px-6 mx-auto bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 md:px-8">
      <div className="max-w-[1080px] mx-auto">
        <motion.h2
          className="text-2xl font-bold text-center md:text-4xl"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          主要内容
        </motion.h2>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-10 my-8 text-center md:my-12"
        >
          React 19 给开发者带来了巨大的变化和提升，主要体现在如下几个方面
        </motion.p>

        <div className="flex flex-col items-stretch space-y-6 md:justify-between md:flex-row md:space-x-6 md:space-y-0"></div>
      </div>
    </div>
  );
};

export default MainContent;
