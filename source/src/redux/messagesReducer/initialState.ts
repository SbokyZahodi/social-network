import { initialStateType } from "./messagesReducer";
import avatar1 from "./avatars/avatar1.jpg";
import avatar2 from "./avatars/avatar2.png";
import avatar3 from "./avatars/avatar3.jpg";
import avatar4 from "./avatars/avatar4.jpg";
import { nanoid } from "@reduxjs/toolkit";

const initialState: initialStateType = {
  currentDialog: null,
  dialogs: [
    {
      avatar: avatar1,
      id: nanoid(),
      messages: [
        {
          id: nanoid(),
          isMyMessage: false,
          text: "Hello",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: "How are you?",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: ":)",
        },
      ],
      name: "FiftyFive",
    },
    {
      avatar: avatar2,
      id: nanoid(),
      messages: [
        {
          id: nanoid(),
          isMyMessage: false,
          text: "Hello",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: "How are you?",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: ":)",
        },
      ],
      name: "PostPunk Enjoyer",
    },
    {
      avatar: avatar3,
      id: nanoid(),
      messages: [
        {
          id: nanoid(),
          isMyMessage: false,
          text: "Hello",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: "How are you?",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: ":)",
        },
      ],
      name: "John Screw",
    },
    {
      avatar: avatar4,
      id: nanoid(),
      messages: [
        {
          id: nanoid(),
          isMyMessage: false,
          text: "Hello",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: "How are you?",
        },
        {
          id: nanoid(),
          isMyMessage: false,
          text: ":)",
        },
      ],
      name: "Peter Jackson",
    },
  ],
};

export default initialState;
