import ToolBarLeft from "./ToolBarLeft";
import ToolBarRight from "./ToolBarRight";
import { motion } from "motion/react";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed flex justify-between w-full h-16 pl-6 pr-6 bg-white border-b bg-opacity-80 backdrop-blur-sm"
    >
      <ToolBarLeft />
      <ToolBarRight />
    </motion.header>
  );
};

export default Header;
