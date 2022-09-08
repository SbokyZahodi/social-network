import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileAPI } from "../../API/profileAPI/profileAPI";

export const profileThunks = {
    getProfile: createAsyncThunk('profile/getProfile', async (id: number) => {
        return await profileAPI.getProfile(id)
    })
};
