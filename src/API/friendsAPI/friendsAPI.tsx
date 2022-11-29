import axios from "axios";
import { followResponse, unfollowResponse } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/follow/",
  headers: {
    "API-KEY": "3c5f1ef1-00c6-40ab-af7d-ac05dda1c2dd",
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
