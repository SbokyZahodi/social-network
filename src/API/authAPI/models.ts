export type login = {
  resultCode: number;
  messages: string[];
  data: {
    userId: number;
  };
};

export type logout = {
  resultCode: number;
  messages: string[];
  data: {
    id: number;
    email: string;
    login: string;
  };
};
