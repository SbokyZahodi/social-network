import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { profile } from "../../API/profileAPI/models";
import { profileThunks } from "./profileThunks";

interface initialStateType {
  profile: profile | null;
  status: string | null;
  posts: {
    id: string;
    content: string;
  }[];
}

const initialState: initialStateType = {
  status: null,
  profile: null,
  posts: [],
};

const profileReducer = createSlice({
  name: "profile",
  initialState,

  reducers: {
    createPost(state, action: PayloadAction<{ content: string }>) {
      state.posts.push({
        id: nanoid(),
        content: action.payload.content,
      });
    },
    editPost(
      state,
      action: PayloadAction<{ postID: string; newContent: string }>
    ) {
      state.posts.forEach((item) => {
        if (item.id === action.payload.postID) {
          item.content = action.payload.newContent;
        }
      });
    },
    deletePost(state, action: PayloadAction<{ id: string }>) {
      let array = state.posts.filter((item) => item.id !== action.payload.id);
      state.posts = array;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(profileThunks.getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(profileThunks.getStatus.fulfilled, (state, action) => {
      state.status = action.payload;
    });
  },
});

export default profileReducer.reducer;
export const { createPost, deletePost, editPost, setStatus } = profileReducer.actions;
