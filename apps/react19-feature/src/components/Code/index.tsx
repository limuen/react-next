import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import clsx from "clsx";
import SvgIcon from "@/components/SvgIcon";
import ButtonCaseRaw from "@/components/Button/ButtonCase?raw";
import Button from "@/components/Button";
import { Show } from "@/utils";

SyntaxHighlighter.registerLanguage("javascript", js);

type FileMap = {
  [key: string]: string;
};

const defiles: FileMap = {
  ButtonCase: ButtonCaseRaw
};

interface IProps {
  files?: FileMap;
  caseRender?: React.ReactNode;
  active?: number;
  className?: string;
  auth?: boolean;
}

const Code: React.FC<IProps> = ({ files = defiles, caseRender, active = 0, className, auth = false }) => {
  const fileTitles = Object.keys(files);
  const [currentCode, updateCurrentCode] = useState<string>(fileTitles[active]);

  const switchTitle = (i: number): void => {
    updateCurrentCode(fileTitles[i]);
  };

  const base = "border border-gray-100 flex bg-white flex-col-reverse sm:flex-row overflow-hidden";
  const cls = clsx(base, className);

  return (
    <div className={cls}>
      <div className="relative flex-1 overflow-scroll">
        <div className="sticky top-0 flex bg-white border-b border-gray-100">
          {fileTitles.map((fileTitle, i) => (
            <Button
              key={fileTitle}
              ghost
              onClick={() => switchTitle(i)}
              className={currentCode === fileTitle ? "text-blue-500" : ""}
            >
              {fileTitle}
            </Button>
          ))}
        </div>
        <pre className="text-sm leading-6">
          <SyntaxHighlighter language="javascript" PreTag="div" style={atomOneLight}>
            {auth ? files[currentCode] : "未获得阅读权限"}
          </SyntaxHighlighter>
        </pre>
      </div>

      <Show when={!!caseRender}>
        <div className="sm:w-[1px] h-[1px] sm:h-auto bg-gray-100"></div>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center pl-3 border-b border-gray-100">
            <SvgIcon name="preview" iconStyle={{ width: "24px", height: "24px" }} />
            <Button ghost className="px-2">
              预览
            </Button>
          </div>
          {caseRender}
        </div>
      </Show>
    </div>
  );
};

export default Code;
