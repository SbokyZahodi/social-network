import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../../API/usersAPI/usersAPI";

export const usersThunks = {
  getUsersByPage: createAsyncThunk(
    "users/getUsersByPage",
    async (page: number) => {
      return await usersAPI.getUsersByPage(page);
    }
  ),
};
