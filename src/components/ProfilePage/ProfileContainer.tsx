import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { profileThunks } from "../../redux/profileReducer/profileThunks";
import Profile from "./Profile/Profile";
const ProfileContainer = () => {
  let dispatch = useAppDispatch();
  let params = useParams();
  let profile = useAppSelector((state) => state.profile.profile);
  let myID = useAppSelector((state) => state.auth.myID);

  useEffect(() => {
    dispatch(profileThunks.getProfile(Number(params.id)));
  }, [params.id]);

  return profile && <Profile profile={profile} />;
};
export default ProfileContainer;
