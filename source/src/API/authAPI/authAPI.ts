import axios from "axios";
import { login, authMe } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/auth/",
  headers: {
    "API-KEY": "3c5f1ef1-00c6-40ab-af7d-ac05dda1c2dd",
  },
});

export const authAPI = {
  async login(email: string, password: string, rememberMe: boolean = false) {
    return (
      await instanse.post<login>(`login`, {
        email: email,
        password: password,
        rememberMe: rememberMe,
      })
    ).data;
  },
  async logout() {
    return (await instanse.delete("login")).data;
  },

  async authMe() {
    return (await instanse.get<authMe>("me")).data;
  },
};
