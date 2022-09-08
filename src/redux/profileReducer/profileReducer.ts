import { createSlice } from "@reduxjs/toolkit";
import { profile } from "../../API/profileAPI/models";
import { profileThunks } from "./profileThunks";

interface initialStateType {
  profile: profile | null;
}

const initialState: initialStateType = {
  profile: null,
};

const profileReducer = createSlice({
  name: "profile",
  initialState,

  reducers: {
    action(state) {},
  },
  extraReducers(builder) {
    builder.addCase(profileThunks.getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export default profileReducer.reducer;
export const {} = profileReducer.actions;
