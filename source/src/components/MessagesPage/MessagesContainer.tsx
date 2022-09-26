import { useEffect } from "react";
import { Routes, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentDialog } from "../../redux/messagesReducer/messagesReducer";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

const MessagesContainer = () => {
  let currentDialog = useAppSelector((state) => state.messages.currentDialog);
  let params = useParams();
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  const id = Object.values(params).at(0);

  useEffect(() => {
    if (id) {
      dispatch(setCurrentDialog(id));
    } else {
      dispatch(setCurrentDialog(0));
    }
  }, [params]);

  useEffect(() => {
    navigate("/messages");
  }, []);

  return (
    <div className={`lg:flex w-full lg:h-full lg:p-10`}>
      <Dialogs />
      {currentDialog && <Messages />}
    </div>
  );
};
export default MessagesContainer;
