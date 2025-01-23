import { twMerge } from "tailwind-merge";
import { Show } from "@/utils/index";
import clsx from "clsx";

// Button 组件的 Props 接口定义
interface IProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  // 按钮类型
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  signal?: boolean;
  // 样式变体
  ghost?: boolean;
  rect?: boolean;
  // 尺寸
  sm?: boolean;
  lg?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
}

// 修复生成器函数的类型
const generatorDefault = (disabled: boolean, ghost?: boolean): string => {
  let base = "bg-gray-100 text-gray-500";
  let inter = "hover:bg-gray-200 active:bg-gray-300";

  if (ghost) {
    base = "bg-transparent text-gray-500";
    inter = "hover:bg-gray-50 active:bg-gray-100 hover:text-gray-600 active:text-gray-700";
  }
  if (disabled) {
    return clsx("opacity-70 cursor-not-allowed", base);
  }
  return clsx(base, inter);
};

const generatorPrimary = (disabled: boolean, ghost?: boolean): string => {
  let base = "bg-blue-500 text-white";
  let inter = "hover:bg-blue-600 active:bg-blue-700";
  if (ghost) {
    base = "bg-transparent text-blue-500";
    inter = "hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 active:text-blue-700";
  }
  if (disabled) {
    return clsx("opacity-70 cursor-not-allowed", base);
  }
  return clsx(base, inter);
};

const generatorDanger = (disabled: boolean, ghost?: boolean): string => {
  let base = "bg-red-500 text-white";
  let inter = "hover:bg-red-600 active:bg-red-700";

  if (ghost) {
    base = "bg-transparent text-red-500";
    inter = "hover:bg-red-50 active:bg-red-100 hover:text-red-600 active:text-red-700";
  }
  if (disabled) {
    return clsx("opacity-70 cursor-not-allowed", base);
  }
  return clsx(base, inter);
};

const generatorSuccess = (disabled: boolean, ghost?: boolean): string => {
  let base = "bg-green-500 text-white";
  let inter = "hover:bg-green-600 active:bg-green-700";

  if (ghost) {
    base = "bg-transparent text-green-500";
    inter = "hover:bg-green-50 active:bg-green-100 hover:text-green-600 active:text-green-700";
  }
  if (disabled) {
    return clsx("opacity-70 cursor-not-allowed", base);
  }
  return clsx(base, inter);
};

const generatorSignal = (disabled: boolean): string => {
  let base = "bg-white border-sky-300 text-sky-500";
  let inter = "hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100";

  if (disabled) {
    return clsx("opacity-70 cursor-not-allowed", base);
  }
  return clsx(base, inter);
};

const Button: React.FC<IProps> = ({
  children,
  className = "",
  disabled = false,
  type = "button",
  primary = false,
  danger = false,
  success = false,
  signal = false,
  ghost = false,
  rect = false,
  sm = false,
  lg = false,
  onClick,
  ...other
}) => {
  const base =
    "rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600 hover:bg-transparent";

  // size
  const md = "text-xs py-2 px-4";

  const def = !primary && !danger && !success && !signal;

  const cls = twMerge(
    clsx(
      base,
      md,
      {
        // type
        [generatorDefault(disabled, ghost)]: def,
        [generatorPrimary(disabled, ghost)]: primary,
        [generatorDanger(disabled, ghost)]: danger,
        [generatorSuccess(disabled, ghost)]: success,
        [generatorSignal(disabled)]: signal,

        // size
        ["text-xs py-1.5 px-3"]: sm,
        ["text-lg py-2 px-6"]: lg,
        ["p-2"]: rect
      },
      className
    )
  );

  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick} {...other}>
      {children}
      <Show when={signal}>
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
          <span className="relative inline-flex w-3 h-3 rounded-full bg-sky-500"></span>
        </span>
      </Show>
    </button>
  );
};

export default Button;
