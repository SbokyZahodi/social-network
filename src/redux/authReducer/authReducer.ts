import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../API/authAPI/authAPI";
import { authThunks } from "./authThunks";

interface initialStateType {
  isAuth: boolean | null;
  pending: boolean;
  errors: string[] | null;
  myID: number | null;
}

const initialState: initialStateType = {
  isAuth: null,
  pending: false,
  errors: [],
  myID: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(authThunks.login.fulfilled, (state, action) => {
      state.pending = false;
      if (action.payload.resultCode === 0) {
        state.isAuth = true;
        state.errors = null;
        state.myID = action.payload.data.userId;
      } else {
        state.errors = [];
        state.errors = action.payload.messages;
      }
    });
    builder.addCase(authThunks.login.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(authThunks.authMe.fulfilled, (state, action) => {
      if (action.payload.resultCode === 0) {
        state.isAuth = true;
        state.myID = action.payload.data.id;
      } else {
        state.isAuth = false;
        state.myID = null;
      }
    });
    builder.addCase(authThunks.logout.fulfilled, (state, action) => {
      state.isAuth = false;
      state.myID = null;
    });
  },
});

export default authReducer.reducer;
export const {} = authReducer.actions;
