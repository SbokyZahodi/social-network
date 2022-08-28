import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersThunks } from "./usersThunks";

interface initialStateType {
  users: {
    followed: boolean;
    id: number;
    name: string;
    photos: { small: null | string; large: string };
    status: string;
  }[];
  totalCount: number;
  error: string | null;
  page: number;
}

const initialState: initialStateType = {
  users: [],
  totalCount: 0,
  error: null,
  page: 1,
};

const usersReducer = createSlice({
  name: "users",
  initialState,

  reducers: {
    switchFollowUnfollow(state, action: PayloadAction<number>) {},
  },
  extraReducers(builder) {
    builder.addCase(usersThunks.getUsersByPage.fulfilled, (state, action) => {
      action.payload.items.forEach((item) => {
        state.users.push(item);
      });
      state.totalCount = action.payload.totalCount;
      state.error = action.payload.error;
      state.page = state.page + 1;
    });
  },
});

export default usersReducer.reducer;
export const { switchFollowUnfollow } = usersReducer.actions;
