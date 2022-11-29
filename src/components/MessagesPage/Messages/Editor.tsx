import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addMessage } from "../../../redux/messagesReducer/messagesReducer";

const Editor = () => {
  const [NewMessageText, setNewMessageText] = useState("");
  let dispatch = useAppDispatch();

  const sendMessage = () => {
    NewMessageText.trimStart().length && dispatch(addMessage(NewMessageText));
    setNewMessageText("");
  };

  return (
    <div className={`flex p-2`}>
      <textarea
        className="bg-inherit resize-none outline-none w-4/5 h-[100px] p-2 rounded-sm"
        style={{ background: "rgba(217, 217, 217, 0.17)" }}
        value={NewMessageText}
        onChange={(e) => setNewMessageText(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.0}
        stroke="currentColor"
        className="w-12 h-12 text-[#5B5B5B]"
        onClick={() => sendMessage()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    </div>
  );
};
export default Editor;
