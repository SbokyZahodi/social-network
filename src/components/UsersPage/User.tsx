import { FC } from "react";
import { NavLink } from "react-router-dom";
type user = {
  id: number;
  name: string;
  status: string;
  avatar: string | null;
  followed: boolean;
};

const User: FC<user> = ({ id, name, status, avatar, followed }) => {
  return (
    <div className={`m-5 flex items-center`}>
      <div
        className={`bg-[#22242a] w-[300px]  md:w-[400px] p-2 rounded-md flex cursor-pointer hover:bg-[#3D3E43] transition `}
      >
        <div className={`flex`}>
          <NavLink to={`/profile/${id}`}>
            <img
              src={avatar ? avatar : "/img/defaultUserPhoto.png"}
              alt=""
              className="w-24 h-24 rounded-full"
            />
          </NavLink>
          <div className={`m-2 `}>
            <div className={`text-xl truncate w-full`}>{name}</div>
            <div className={``}>{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
