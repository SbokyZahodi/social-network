import { FC } from "react";
import { profile } from "../../../API/profileAPI/models";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Followed from "./Followed";
import Posts from "./Posts";
import profilePhoto from "../../../assets/defaultUserPhoto.png";

type profileProps = {
  profile: profile;
};

const MyProfile: FC<profileProps> = ({ profile }) => {
  const {
    contacts,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    photos,
    userId,
    aboutMe,
  } = profile;

  return (
    <div className={`lg:flex w-full h-full`}>
      <div className={`lg:w-[500px]`}>
        <img
          src={photos.large ? photos.large : profilePhoto}
          alt=""
          className={`w-[250px] m-5`}
        />
        <div
          className={`m-5 p-4 text-xl w-[250px] truncate`}
          style={{ background: "rgba(217, 217, 217, 0.03)" }}
        >
          {fullName}
        </div>

        <Followed />
      </div>
      <div className={`p-1 lg:p-4 w-full h-full`}>
        <div
          className={`lg:flex p-4  rounded-md`}
          style={{ background: "rgba(217, 217, 217, 0.03)" }}
        >
          <AboutMe />
          <Contacts />
        </div>
        <Posts photos={photos} defaultPhoto={profilePhoto} />
      </div>
    </div>
  );
};
export default MyProfile;
