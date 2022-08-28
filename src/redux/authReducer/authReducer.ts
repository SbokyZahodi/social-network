import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {}

const initialState: initialStateType = {};

const authReducer = createSlice({
  name: "auth",
  initialState,

  reducers: {
    auth(state) {},
  },
});

export default authReducer.reducer;
export const {} = authReducer.actions;
