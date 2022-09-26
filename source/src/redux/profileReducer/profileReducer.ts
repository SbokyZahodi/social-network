import { createSlice, current, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { profile } from "../../API/profileAPI/models";
import { profileThunks } from "./profileThunks";

interface initialStateType {
  profile: profile | null;
  status: string | null;
  posts: {
    id: string;
    content: string;
  }[];
  isMyProfile: boolean;
  profilePending: boolean;
  isUserFollower: boolean;
  isFollowUnfollowPending: boolean;
}

const initialState: initialStateType = {
  status: null,
  profile: null,
  posts: [],
  isMyProfile: false,
  profilePending: false,
  isUserFollower: false,
  isFollowUnfollowPending: false,
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
    switchIsMyProfile(state, action: PayloadAction<boolean>) {
      state.isMyProfile = action.payload;
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
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(profileThunks.getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.profilePending = false;
    });
    builder.addCase(profileThunks.getProfile.pending, (state, action) => {
      state.profilePending = true;
    });

    builder.addCase(profileThunks.getStatus.fulfilled, (state, action) => {
      state.status = action.payload;
    });
    builder.addCase(profileThunks.setContact.fulfilled, (state, action) => {});
    builder.addCase(profileThunks.setPhoto.fulfilled, (state, action) => {
      if (state.profile) {
        if (action.payload.resultCode === 0) {
          state.profile.photos.large = action.payload.data.photos.large;
        }
      }
    });
    builder.addCase(
      profileThunks.checkIsUserFollower.fulfilled,
      (state, action) => {
        action.payload
          ? (state.isUserFollower = true)
          : (state.isUserFollower = false);
      }
    );
    builder.addCase(profileThunks.followUser.fulfilled, (state, action) => {
      if (action.payload.resultCode === 0) {
        state.isUserFollower = true;
        state.isFollowUnfollowPending = false;
      }
    });
    builder.addCase(profileThunks.followUser.pending, (state, action) => {
      state.isFollowUnfollowPending = true;
    });
    builder.addCase(profileThunks.unfollowUser.fulfilled, (state, action) => {
      if (action.payload.resultCode === 0) {
        state.isUserFollower = false;
        state.isFollowUnfollowPending = false;
      }
    });
    builder.addCase(profileThunks.unfollowUser.pending, (state, action) => {
      state.isFollowUnfollowPending = true;
    });
  },
});

export default profileReducer.reducer;
export const {
  createPost,
  deletePost,
  editPost,
  setStatus,
  switchIsMyProfile,
} = profileReducer.actions;
