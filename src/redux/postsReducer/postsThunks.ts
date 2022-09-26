import { createAsyncThunk } from "@reduxjs/toolkit";
import { feedAPI } from "../../API/feedAPI/feedAPI";

export const postsThunks = {
  getPosts: createAsyncThunk("posts/getPosts", async () => {
    return await feedAPI.getPosts();
  }),
  loadMorePosts: createAsyncThunk(
    "posts/loadMoreUsers",
    async (start: number) => {
      return await feedAPI.loadMorePosts(start);
    }
  ),
};
