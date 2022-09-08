import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authReducer";
import postsReducer from "./postsReducer/postsReducer";
import profileReducer from "./profileReducer/profileReducer";
import usersReducer from "./usersReducer/usersReducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
