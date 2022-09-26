import { createSlice, current, nanoid, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

export type initialStateType = {
  currentDialog: {
    name: string;
    avatar: string;
    id: string;
    messages: {
      text: string;
      id: string;
      isMyMessage: boolean;
    }[];
  } | null;
  dialogs: {
    name: string;
    avatar: string;
    id: string;
    messages: {
      text: string;
      id: string;
      isMyMessage: boolean;
    }[];
  }[];
};

const messagesReducer = createSlice({
  name: "messages",
  initialState,

  reducers: {
    setCurrentDialog(state, action: PayloadAction<string | number>) {
      // dispatch 0 if you want clear currentDialog
      if (action.payload === 0) {
        state.currentDialog = null;
      } else {
        let currentDialog = state.dialogs.find(
          (item) => item.id === action.payload
        );
        if (currentDialog) {
          state.currentDialog = currentDialog;
        }
      }
    },
    addMessage(state, action: PayloadAction<string>) {
      const currentDialog = state.currentDialog;
      const message = {
        id: nanoid(),
        isMyMessage: true,
        text: action.payload,
      };

      if (currentDialog) {
        state.dialogs.find(item => item.id === currentDialog.id)?.messages.push(message)
        currentDialog.messages.push(message);
      }
    },
  },
});

export default messagesReducer.reducer;
export const { setCurrentDialog, addMessage } = messagesReducer.actions;
