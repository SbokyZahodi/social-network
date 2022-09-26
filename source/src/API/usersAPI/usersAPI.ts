import axios from "axios";
import { users } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8cbd7a73-6aa0-4e1c-8d72-66c4f411a597",
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
