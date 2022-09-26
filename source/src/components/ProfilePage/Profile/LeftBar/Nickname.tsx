import { FC } from "react";
import { useAppSelector } from "../../../../redux/hooks";

const Nickname = () => {
  let username = useAppSelector((state) => state.profile.profile?.fullName);

  return (
    <div
      className={`mt-2 p-3 text-xl`}
      style={{ background: "rgba(217, 217, 217, 0.12)" }}
    >
      {username}
    </div>
  );
};
export default Nickname;
