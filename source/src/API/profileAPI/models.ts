export type profile = {
  userId: number | null;
  aboutMe: string;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
};

export type status = {
  resultCode: number;
  messages: string[];
  data: {};
};

export type setPhotoResponse = {
  resultCode: number;
  messages: string[]
  data: {
    photos: {
      small: string,
      large: string
    }
  };
};
