import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCurrentDialog } from "../../../redux/messagesReducer/messagesReducer";
import Editor from "./Editor";
import Message from "./Message";

const Messages = () => {
  let messages = useAppSelector(
    (state) => state.messages.currentDialog?.messages
  );
  let currentDialog = useAppSelector((state) => state.messages.currentDialog);
  let dispatch = useAppDispatch();
  let arrayOfMessages = messages?.map((item) => {
    return (
      <Message
        text={item.text}
        id={item.id}
        isMyMessage={item.isMyMessage}
        key={item.id}
      />
    );
  });
  let navigate = useNavigate();

  return (
    <div className={`lg:flex lg:justify-center lg:h-[90vh] lg:w-1/2`}>
      <div
        className={`absolute lg:static top-0 bg-[#1B1D24] w-full h-[90%] lg:w-[1000px] lg:ml-12 lg:h-[80%] lg:bg-[#21232B]`}
      >
        <div className={`flex items-center border-b-2 border-black p-5`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-4 lg:hidden"
            onClick={() => navigate("/messages")}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 4l-8 8l8 8"
            />
          </svg>
          <div className={`text-2xl`}>{currentDialog?.name}</div>
        </div>

        <div className={`h-[60%] lg:h-[70%] overflow-auto`}>
          {arrayOfMessages}
        </div>

        <Editor />
      </div>
    </div>
  );
};
export default Messages;
