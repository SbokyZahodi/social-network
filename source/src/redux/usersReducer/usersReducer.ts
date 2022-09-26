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
  friends: {
    followed: boolean;
    id: number;
    name: string;
    photos: { small: null | string; large: string };
    status: string;
  }[];
  totalCount: number;
  error: string | null;
  page: number;
  profilePreview: {
    userId: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
      github: string;
      vk: string;
      facebook: string;
      instagram: string;
      twitter: string;
      website: string;
      youtube: string;
      mainLink: string;
    };
  } | null;
}

const initialState: initialStateType = {
  users: [],
  friends: [],
  totalCount: 0,
  error: null,
  page: 1,
  profilePreview: null,
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
    builder.addCase(usersThunks.getFriends.fulfilled, (state, action) => {
      state.friends = action.payload.items;
      state.totalCount = action.payload.totalCount;
    });
  },
});

export default usersReducer.reducer;
export const { switchFollowUnfollow } = usersReducer.actions;
