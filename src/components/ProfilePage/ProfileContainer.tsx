import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { profileThunks } from "../../redux/profileReducer/profileThunks";
import MyProfile from "./MyProfile/MyProfile";
import Profile from "./Profile/Profile";
const ProfileContainer = () => {
  let dispatch = useAppDispatch();
  let params = useParams();
  let profile = useAppSelector((state) => state.profile.profile);
  let myID = useAppSelector((state) => state.auth.myID);

  useEffect(() => {
    dispatch(profileThunks.getProfile(Number(params.id)));
    dispatch(profileThunks.getStatus(Number(params.id)));
  }, [params.id]);

  if (Number(params.id) === myID) {
    return profile && <MyProfile profile={profile} />;
  }

  return profile && <Profile profile={profile} />;
};
export default ProfileContainer;
