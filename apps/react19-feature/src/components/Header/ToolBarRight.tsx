import { motion } from "motion/react";
import SvgIcon from "../SvgIcon";

export const headerNavLinks = [
  { key: "React19", text: "React19" },
  { key: "React20", text: "React20" },
  { key: "React21", text: "React21" }
];

const NavHeaderRight: React.FC = () => {
  return (
    <div className="flex items-center transition-all">
      <SvgIcon name="react" iconStyle={{ width: "24px", height: "24px" }} />
      <div className="ml-2 font-bold">React19</div>
      <div className="hidden md:flex">
        {headerNavLinks.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="ml-8 text-gray-500 cursor-pointer select-none hover:text-gray-900">{item.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NavHeaderRight;