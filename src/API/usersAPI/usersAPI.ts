import axios from "axios";
import { users } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "3c5f1ef1-00c6-40ab-af7d-ac05dda1c2dd",
  },
});

export const usersAPI = {
  async getUsersByPage(page: number = 1) {
    return (await instanse.get<users>(`users?page=${page}`)).data;
  },
  async getUsersByName(name: string) {
    return (await instanse.get<users>(`users?term=${name}`)).data;
  },
  async getFriends() {
    return (await instanse.get<users>("users?friend=true")).data;
  },
};
