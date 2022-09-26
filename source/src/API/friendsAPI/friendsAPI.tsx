import axios from "axios";
import { followResponse, unfollowResponse } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/follow/",
  headers: {
    "API-KEY": "8cbd7a73-6aa0-4e1c-8d72-66c4f411a597",
  },
});

export const friendsAPI = {
  async followUser(id: number) {
    return (await instanse.post<followResponse>(`${id}`)).data;
  },
  async unfollowUser(id: number) {
    return (await instanse.delete<unfollowResponse>(`${id}`)).data;
  },
  async isUserFollower(id: number) {
    return (await instanse.get<boolean>(`${id}`)).data;
  },
};
