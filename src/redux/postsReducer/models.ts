export type post = {
  userId?: number;
  id: number;
  title?: string;
  body: string;
  name?: string;
  img?: string;
  liked: false;
  likes: number;
};

// Incoming post
export type inPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
