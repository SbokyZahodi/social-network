import axios from "axios";
import { profile } from "./models";

const instanse = axios.create({
  withCredentials: false,
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile/",
});

export const profileAPI = {
  async getProfile(id: number) {
    return (await instanse.get<profile>(`${id}`)).data;
  },
};
