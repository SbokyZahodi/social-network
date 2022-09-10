import { createAsyncThunk } from "@reduxjs/toolkit";
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
};
