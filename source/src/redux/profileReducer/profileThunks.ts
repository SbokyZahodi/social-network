import { createAsyncThunk } from "@reduxjs/toolkit";
import { friendsAPI } from "../../API/friendsAPI/friendsAPI";
import { profileAPI } from "../../API/profileAPI/profileAPI";

export const profileThunks = {
  getProfile: createAsyncThunk("profile/getProfile", async (id: number) => {
    return await profileAPI.getProfile(id);
  }),
  getStatus: createAsyncThunk("profile/getStatus", async (id: number) => {
    return await profileAPI.getStatus(id);
  }),
  setStatus: createAsyncThunk("profile/setStatus", async (status: string) => {
    return await profileAPI.setStatus(status);
  }),
  setContact: createAsyncThunk(
    "profile/addContact",
    async (data: {
      github: string;
      youtube: string;
      vk: string;
      aboutMe: string;
      lookingForAJob: boolean;
      lookingForAJobDescription: string;
      fullname: string;
    }) => {
      return await profileAPI.setContact(data);
    }
  ),
  setPhoto: createAsyncThunk("profile/setPhoto", async (file: File) => {
    return await profileAPI.setPhoto(file);
  }),
  checkIsUserFollower: createAsyncThunk(
    "profile/checkIsUserFollower",
    async (id: number) => {
      return await friendsAPI.isUserFollower(id);
    }
  ),
  followUser: createAsyncThunk("profile/followUser", async (id: number) => {
    return await friendsAPI.followUser(id);
  }),
  unfollowUser: createAsyncThunk("profile/unfollowUser", async (id: number) => {
    return await friendsAPI.unfollowUser(id);
  }),
};
