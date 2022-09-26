export type users = {
  items: {
    followed: boolean;
    id: number;
    name: string;
    photos: { small: null | string; large: string };
    status: string;
  }[];
  totalCount: number;
  error: string;
};
