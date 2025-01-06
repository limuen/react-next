import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Banner: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["end start", "start start"] });

  const translateY = useTransform(scrollYProgress, [1, 0], [0, 555]);
  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0]);
  const scale = useTransform(scrollYProgress, [1, 0], [1.5, 1]);

  return (
    <motion.div id="banner" ref={containerRef} className="relative -mt-16 overflow-hidden">
      <div className="bg-white bg-opacity-90">
        <div className="pt-32 pb-14 md:py-56 max-w-[800px] mx-auto px-6 md:px-8 space-y-8 md:space-y-12">
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>Created by</span>
            <img
              className="overflow-hidden rounded-full size-8"
              src="https://avatars.githubusercontent.com/u/31790606?v=4"
              alt=""
            />
            <span>AiYang</span>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-center md:text-5xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            React 19
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="leading-8 text-center text-gray-500 text-md"
          ></motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <a className="inline-flex px-4 py-2 ml-4 space-x-2 text-sm text-white bg-red-600 rounded-md cursor-pointer">
              <span>AiYangLiam</span>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div className="absolute -z-10 bottom-0 h-full w-full min-w-[1255px]" style={{ opacity, translateY, scale }}>
        <img
          className="w-full"
          src="https://pica.zhimg.com/v2-9f9bf4eed62e44901d9431b683019f29_720w.jpg?source=172ae18b"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
