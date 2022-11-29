import { FC } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { setStatus } from "../../../../redux/profileReducer/profileReducer";
import { profileThunks } from "../../../../redux/profileReducer/profileThunks";

const StatusEditor: FC<{
  NewStatusText: string;
  setNewStatusText: any;
  setEditMode: any;
  status: string | null;
}> = ({ NewStatusText, setEditMode, setNewStatusText, status }) => {
  let dispatch = useAppDispatch();
  const changeStatusText = () => {
    if (NewStatusText !== status) {
      NewStatusText.trimStart().length && dispatch(setStatus(NewStatusText));
      NewStatusText.trimStart().length &&
        dispatch(profileThunks.setStatus(NewStatusText));
      setEditMode(false);
    } else {
        setEditMode(false)
    }
  };

  return (
    <textarea
      value={NewStatusText}
      onChange={(e) => setNewStatusText(e.target.value)}
      onBlur={() => changeStatusText()}
      className={"bg-inherit resize-none w-full h-full p-1 outline-none mt-2"}
      autoFocus
    />
  );
};

export default StatusEditor;
