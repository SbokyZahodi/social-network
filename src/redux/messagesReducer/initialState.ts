import { initialStateType } from "./messagesReducer";

const initialState: initialStateType = {
  dialogs: [
    {
      avatar: "",
      id: "",
      messages: [
        {
          data: "",
          id: "",
          isMyMessage: false,
          text: "",
        },
      ],
      name: "",
    },
  ],
};

export default initialState;
