import { FC } from "react";
import defaultUserPhoto from "./assets/defaultUserPhoto.png";

type user = {
  id: number;
  name: string;
  status: string;
  avatar: string | null;
  followed: boolean;
};

// bg-[#3D3E43]

const User: FC<user> = ({ id, name, status, avatar, followed }) => {
  return (
    <div className={`m-5 flex items-center`}>
      <div
        className={`bg-[#22242a] w-[300px]  md:w-[400px] p-2 rounded-md flex cursor-pointer hover:bg-[#3D3E43] transition `}
      >
        <div className={`flex`}>
          <img
            src={avatar ? avatar : defaultUserPhoto}
            alt=""
            className="w-24 h-24 rounded-full"
          />
          <div className={`m-2 `}>
            <div className={`text-xl`}>{name}</div>
            <div className={``}>{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
