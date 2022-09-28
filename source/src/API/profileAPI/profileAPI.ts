import axios from "axios";
import { profile, setPhotoResponse, status } from "./models";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile",
  headers: {
    "API-KEY": "3c5f1ef1-00c6-40ab-af7d-ac05dda1c2dd",
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
  async setContact(data: {
    github: string | null;
    youtube: string | null;
    vk: string | null;
    fullname: string;
  }) {
    return (
      await instanse.put("", {
        aboutMe: "я круто чувак 1001%",
        contacts: {
          ...data,
        },
        lookingForAJob: false,
        lookingForAJobDescription: "Gell",
        fullName: data.fullname,
      })
    ).data;
  },
  async setPhoto(file: File) {
    let data = new FormData();
    data.append("image", file);

    return (await instanse.put<setPhotoResponse>("photo", data)).data;
  },
};
