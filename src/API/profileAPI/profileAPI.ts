import axios from "axios";
import { profile, status } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile/",
  headers: {
    "API-KEY": "8cbd7a73-6aa0-4e1c-8d72-66c4f411a597",
  },
});

export const profileAPI = {
  async getProfile(id: number) {
    return (await instanse.get<profile>(`${id}`)).data;
  },
  async getStatus(id: number) {
    return (await instanse.get<string>(`status/${id}`)).data;
  },
  async setStatus(status: string) {
    return (
      await instanse.put<status>("status", {
        status: status,
      })
    ).data;
  },
};
