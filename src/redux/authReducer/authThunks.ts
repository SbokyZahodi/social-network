import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../API/authAPI/authAPI";

export const authThunks = {
  login: createAsyncThunk(
    "auth/login",
    async (data: { email: string; password: string; rememberMe: boolean }) => {
      const { email, password, rememberMe } = data;
      return authAPI.login(email, password, rememberMe);
    }
  ),
  authMe: createAsyncThunk("auth/authMe", async () => {
    return authAPI.authMe();
  }),
  logout: createAsyncThunk("auth/logout", async () => {
    return authAPI.logout();
  }),
};
