export type post = {
  userId?: number;
  id: number;
  title?: string;
  body: string;
  name?: string;
  img?: string;
  liked: boolean;
  likes: number;
  comments?: {
    userName: string;
    id: string;
    text: string;
  }[];
};

// Incoming post
export type inPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
