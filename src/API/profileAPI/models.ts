export type profile = {
  userId: number | null;
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
  photo: string | null;
};