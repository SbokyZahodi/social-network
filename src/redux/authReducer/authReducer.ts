import { createSlice } from "@reduxjs/toolkit";
import { authThunks } from "./authThunks";

interface initialStateType {
  isAuth: boolean;
}

const initialState: initialStateType = {
  isAuth: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login(state) {},
  },
  extraReducers(builder) {
    builder.addCase(authThunks.login.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default authReducer.reducer;
export const { login } = authReducer.actions;
