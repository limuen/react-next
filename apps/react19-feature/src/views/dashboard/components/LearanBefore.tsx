import { motion } from "motion/react";
import { CircleCheck } from "lucide-react";
import Flex from "@/components/Flex";

const LearnBefore: React.FC = () => {
  const LearnBeforeList = [
    {
      desc: "具备一定的 JavaScript 基础",
      delay: 0.4
    },
    {
      desc: "熟悉异步请求，熟悉 fetch 与 Promise",
      delay: 0.6
    },
    {
      desc: "熟悉 React 之前的版本的使用",
      delay: 0.8
    }
  ];

  const MrClass = "text-gray-600 mt-5 rounded-md border border-gray-200 py-3 px-4 bg-gray-50 hover:border-green-500 transition";

  return (
    <div className="bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 max-w-[1080px] mx-auto md:px-32 px-6">
      <motion.h2
        className="text-2xl font-bold text-center md:text-4xl"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Learn Before
      </motion.h2>

      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="my-8 text-center md:my-12"
      >
        学习之前，你需要具备一些前置的基础能力
      </motion.p>

      {LearnBeforeList.map((item, i) => (
        <motion.div
          className="block cursor-pointer"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          key={i}
          transition={{ duration: 0.5, delay: item.delay }}
          viewport={{ once: true }}
        >
          {/* <div className="flex items-center px-4 py-3 mt-4 text-gray-600 transition border border-gray-200 rounded-md bg-gray-50 hover:border-green-500">
            <CircleCheck size={18} />
            {item.desc}
          </div> */}
          <Flex className={MrClass}>
            <CircleCheck className="mr-2 text-[#00C16A]" size={18} />
            <div className="ml-2">{item.desc}</div>
          </Flex>
        </motion.div>
      ))}
    </div>
  );
};

export default LearnBefore;
