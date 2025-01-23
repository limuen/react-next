declare module "@/views/dashboard/file" {
  const File: React.FC;
  export default File;
}

declare module "@/components/Code" {
  interface CodeIProps {
    files: Record<string, string>;
    caseRender: React.ReactNode;
    auth?: boolean;
  }

  const Code: React.FC<CodeIProps>;
  export default Code;
}
