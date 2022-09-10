import { FC } from "react";
import { profile } from "../../../API/profileAPI/models";
import profilePhoto from "../../../assets/defaultUserPhoto.png";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Followed from "./Followed";
import Posts from "./Posts";

type profileProps = {
  profile: profile;
};

const Profile: FC<profileProps> = ({ profile }) => {
  const {
    contacts,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    photos,
    userId,
  } = profile;

  return (
    <div className={`lg:flex`}>
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
        <div className={`m-5`}>Follow</div>

        <Followed />
      </div>
      <div className={`lg:p-4 p-1`}>
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
export default Profile;
