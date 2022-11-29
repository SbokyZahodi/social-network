import { FC } from "react";
import { NavLink as NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCurrentDialog } from "../../../redux/messagesReducer/messagesReducer";

type props = {
  avatar: string;
  userName: string;
  lastMessage: string | undefined;
  id: string;
};

const Dialog: FC<props> = ({ avatar, lastMessage, userName, id }) => {
  let dispatch = useAppDispatch();

  const setDialog = () => {
    dispatch(setCurrentDialog(id));
  };

  return (
    <NavLink to={`${id}`}>
      <div
        className={`flex p-4 m-2 rounded-sm`}
        style={{ background: "rgba(217, 217, 217, 0.11)" }}
        onClick={() => setDialog()}
      >
        <img src={avatar} alt="" className="w-16 h-16 rounded-full" />
        <div className={`mx-2`}>
          <div className={`text-xl`}>{userName}</div>
          <div className={`truncate w-[200px]`}>{lastMessage}</div>
        </div>
      </div>
    </NavLink>
  );
};
export default Dialog;
