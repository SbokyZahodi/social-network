import { faker } from "@faker-js/faker";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { postsThunks } from "./postsThunks";
import { inPost, post } from "./models";

interface initialStateType {
  posts: post[];
  start: number;
  selectedPost: post | null;
}

const initialState: initialStateType = {
  posts: [],
  start: 0,
  selectedPost: null,
};
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const postsReducer = createSlice({
  name: "posts",
  initialState,

  reducers: {
    setPosts(state, action: PayloadAction<inPost[]>) {
      action.payload.forEach((item) => {
        state.posts.push({
          ...item,
          name: faker.name.fullName(),
          img: faker.image.avatar(),
          liked: false,
          likes: getRandomInt(100),
        });
      });
    },
    setStart(state, action) {
      state.start = action.payload;
    },
    switchLike(state, action: PayloadAction<number>) {
      let post = state.posts.find((item) => item.id === action.payload);

      if (post) {
        if (post.liked) {
          post.liked = false;
          post.likes = post.likes - 1;
        } else {
          post.liked = true;
          post.likes = post.likes + 1;
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(postsThunks.getPosts.fulfilled, (state, action) => {
      if (state.posts.length === 0) {
        action.payload.forEach((item) => {
          state.posts.push({
            ...item,
            name: faker.name.fullName(),
            img: faker.image.avatar(),
            liked: false,
            likes: getRandomInt(100),
          });
        });
        state.start = state.start = 5;
      }
    });
    builder.addCase(postsThunks.loadMorePosts.fulfilled, (state, action) => {
      action.payload.forEach((item) => {
        state.posts.push({
          ...item,
          name: faker.name.fullName(),
          img: faker.image.avatar(),
          liked: false,
          likes: getRandomInt(100),
        });
      });
      state.start = state.start + 5;
    });
  },
});

export default postsReducer.reducer;
export const { setPosts, setStart, switchLike } = postsReducer.actions;
