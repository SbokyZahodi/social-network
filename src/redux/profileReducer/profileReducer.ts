import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {}

const initialState: initialStateType = {};

const profileReducer = createSlice({
  name: "profile",
  initialState,

  reducers: {
    action(state) {},
  },
});

export default profileReducer.reducer;
export const {} = profileReducer.actions;
