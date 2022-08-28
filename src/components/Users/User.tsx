import { FC } from "react";
import defaultProfilePhoto from "./assets/defaultUserPhoto.png";

type user = {
  id: number;
  name: string;
  status: string;
  avatar: string | null;
  followed: boolean;
};

const User: FC<user> = ({ id, name, status, avatar, followed }) => {
  return (
    <div className={`bg-[#3D3E43] m-4 rounded-md `}>
      <div className={`flex`}>
        <img
          src={avatar ? avatar : defaultProfilePhoto}
          alt=""
          className="w-20 h-20 rounded-full m-2"
        />
        <div className={`mt-4`}>
          <div className={`text-xl`}>{name}</div>
          <div className={``}>{status}</div>
        </div>
      </div>
      <div className={`flex justify-end items-center mx-4 mb-4`}>
        <button className="">{followed ? "unfollow" : "follow"}</button>
      </div>
    </div>
  );
};
export default User;
