import { useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import UploadPhotoButton from "./UploadPhotoButton";

const Avatar = () => {
  let avatar = useAppSelector((state) => state.profile.profile?.photos.large);
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);
  const [UploadButtonVisible, setUploadButtonVisible] = useState(false);

  return (
    <div
      className={`w-[180px] lg:w-[250px] relative`}
      onMouseEnter={() => setUploadButtonVisible(true)}
      onMouseLeave={() => setUploadButtonVisible(false)}
    >
      <img
        src={avatar ? avatar : "/img/defaultUserPhoto.png"}
        alt=""
        className="w-64"
      />

      {isMyProfile && <UploadPhotoButton visible={UploadButtonVisible} />}
    </div>
  );
};
export default Avatar;
