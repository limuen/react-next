import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  start?: boolean;
  end?: boolean;
  around?: boolean;
  between?: boolean;
  center?: boolean;
  col?: boolean;
  [key: string]: any;
}

const Flex: React.FC<IProps> = ({ children, start, end, around, between, className, center, col, ...other }) => {
  const base = "flex items-center flex-row";

  const cls = clsx(
    base,
    {
      ["flex-col"]: col,
      ["justify-start"]: start,
      ["justify-end"]: end,
      ["justify-around"]: around,
      ["justify-between"]: between,
      ["justify-center"]: center
    },
    className
  );

  return (
    <TailwindDiv className={twMerge(cls)} {...other}>
      {children}
    </TailwindDiv>
  );
};

interface TailwindDivProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const TailwindDiv: React.FC<TailwindDivProps> = props => {
  const { className, children, ...other } = props;

  let bgclass = "";
  let borderclass = "";
  let roundclass = "";

  Object.keys(other).forEach(key => {
    if (key.indexOf("bg-") === 0) {
      bgclass += `${key} `;
    }

    if (key.indexOf("border-") === 0) {
      borderclass += ` ${key} `;
    }

    if (key.indexOf("rounded-") === 0) {
      roundclass += ` ${key} `;
    }
  });

  const cls = clsx(bgclass, borderclass, roundclass, className);

  return (
    <div className={twMerge(cls)} {...other}>
      {children}
    </div>
  );
};

export default Flex;
