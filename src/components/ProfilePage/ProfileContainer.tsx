import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { switchIsMyProfile } from "../../redux/profileReducer/profileReducer";
import { profileThunks } from "../../redux/profileReducer/profileThunks";
import { usersThunks } from "../../redux/usersReducer/usersThunks";
import Profile from "./Profile/Profile";
const ProfileContainer = () => {
  let dispatch = useAppDispatch();
  let params = useParams();
  let myID = useAppSelector((state) => state.auth.myID);
  let profile = useAppSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch(profileThunks.getProfile(Number(params.id)));
    dispatch(profileThunks.getStatus(Number(params.id)));
    dispatch(profileThunks.checkIsUserFollower(Number(params.id)));
    dispatch(usersThunks.getFriends());

    if (Number(params.id) === myID) {
      dispatch(switchIsMyProfile(true));
    } else {
      dispatch(switchIsMyProfile(false));
    }
  }, [params.id]);

  return profile && <Profile />;
};
export default ProfileContainer;
