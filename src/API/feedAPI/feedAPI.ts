import axios from "axios";
import { post } from "./models";

const instanse = axios.create({
  withCredentials: false,
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const feedAPI = {
  async getPosts() {
    return (await instanse.get<post[]>("posts?_start=0&_limit=5")).data;
  },
  async loadMorePosts(start: number) {
    return (await instanse.get<post[]>(`posts?_start=${start}&_limit=5`)).data;
  },
};
