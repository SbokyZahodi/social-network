import profilePhoto from "../assets/testProfile.png";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Followed from "./Followed";
import Posts from "./Posts";

const Profile = () => {
  return (
    <div className={`lg:flex`}>
      <div className={`lg:w-[500px]`}>
        <img src={profilePhoto} alt="" className={`w-[250px] m-5`} />
        <div
          className={`m-5 p-4 text-xl w-[250px] truncate`}
          style={{ background: "rgba(217, 217, 217, 0.03)" }}
        >
          Denis Dmitriev
        </div>
        <div className={`m-5`}>Follow</div>

        <Followed />
      </div>
      <div className={`p-4`}>
        <div
          className={`lg:flex p-4  rounded-md`}
          style={{ background: "rgba(217, 217, 217, 0.03)" }}
        >
          <AboutMe />
          <Contacts />
        </div>
        <Posts />
      </div>
    </div>
  );
};
export default Profile;