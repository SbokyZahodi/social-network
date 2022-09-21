import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { profileThunks } from "../../../../redux/profileReducer/profileThunks";
import Preloader from "../../../FeedPage/Preloader";

const FollowButton = () => {
  let isUserFollower = useAppSelector((state) => state.profile.isUserFollower);
  let dispatch = useAppDispatch();
  let userId = useAppSelector((state) => state.profile.profile?.userId);
  let isPending = useAppSelector(
    (state) => state.profile.isFollowUnfollowPending
  );

  console.log(isUserFollower);

  const unfollowUser = () => {
    userId && dispatch(profileThunks.unfollowUser(userId));
  };

  const followUser = () => {
    userId && dispatch(profileThunks.followUser(userId));
  };

  enum styles {
    unfollow = "border border-red-500 w-[250px] p-3 mt-2 text-center text-xl",
    follow = "border border-green-500 w-[250px] p-3 mt-2 text-center text-xl",
  }

  return (
    <button
      className={isUserFollower ? styles.unfollow : styles.follow}
      onClick={() => {
        isUserFollower ? unfollowUser() : followUser();
      }}
      disabled={isPending ? true : false}
    >
      <span>{isUserFollower ? "Unfollow" : "Follow"}</span>
    </button>
  );
};
export default FollowButton;
