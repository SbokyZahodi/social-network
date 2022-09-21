import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

export type initialStateType = {
  dialogs: {
    name: string;
    avatar: string;
    id: string;
    messages: {
      text: string;
      id: string;
      data: string;
      isMyMessage: boolean;
    }[];
  }[];
};

const messagesReducer = createSlice({
  name: "messages",
  initialState,

  reducers: {
    action(state) {},
  },
});

export default messagesReducer.reducer;
export const {} = messagesReducer.actions;
