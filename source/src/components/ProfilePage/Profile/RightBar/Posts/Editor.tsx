import {
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const Editor: FC<{
  setContent: any;
  content: string;
}> = ({ setContent, content }) => {
  return (
    <textarea
      className={`p-1 mt-2 rounded-md outline-none h-[200px] w-full resize-none overflow-auto `}
      style={{ background: "rgba(250, 248, 248, 0.08)" }}
      onChange={(e) => setContent(e.target.value)}
      value={content}
    ></textarea>
  );
};
export default Editor;
