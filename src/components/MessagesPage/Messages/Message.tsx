import { FC } from "react";

type props = {
  text: string;
  id: string;
  isMyMessage: boolean;
};

const Message: FC<props> = ({ id, isMyMessage, text }) => {
  return (
    <div className={`p-4 flex ${isMyMessage && "justify-end"}`}>
      <div
        className={`w-fit break-words max-w-[400px] p-2 rounded-md ${
          isMyMessage ? "rounded-tr-none text-right" : "rounded-tl-none"
        }  `}
        style={{ background: "rgba(217, 217, 217, 0.04)" }}
      >
        {text}
      </div>
    </div>
  );
};
export default Message;
