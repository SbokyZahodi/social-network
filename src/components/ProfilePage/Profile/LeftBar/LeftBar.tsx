import { useAppSelector } from "../../../../redux/hooks";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";
import Friends from "./Friends";
import Nickname from "./Nickname";

const LeftBar = () => {
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);

  return (
    <div className={`p-2 lg:w-[300px]`}>
      <Avatar />
      <Nickname />
      {!isMyProfile && <FollowButton />}
      <Friends />
    </div>
  );
};
export default LeftBar;
