import { useAppSelector } from "../../../redux/hooks";
import Preloader from "../../FeedPage/Preloader";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

const Profile = () => {
  let isProfilePending = useAppSelector(
    (state) => state.profile.profilePending
  );

  if (isProfilePending) {
    return <Preloader />;
  }

  return (
    <div className={`lg:flex lg:h-full`}>
      <LeftBar />
      <RightBar />
    </div>
  );
};
export default Profile;
