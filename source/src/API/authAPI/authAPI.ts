import axios from "axios";
import { login, authMe } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/auth/",
  headers: {
    "API-KEY": "8cbd7a73-6aa0-4e1c-8d72-66c4f411a597",
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
