import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setStatus } from "../../../redux/profileReducer/profileReducer";
import { profileThunks } from "../../../redux/profileReducer/profileThunks";

const TextArea: FC<{ setEditMode: any; status: string | null }> = ({
  setEditMode,
  status,
}) => {
  const [LocalStatusText, setLocalStatusText] = useState("");
  let dispatch = useAppDispatch();
  useEffect(() => {
    status && setLocalStatusText(status);
  }, [status]);

  const changeStatus = () => {
    if (LocalStatusText !== status) {
      dispatch(setStatus(LocalStatusText));
      dispatch(profileThunks.setStatus(LocalStatusText));
      setEditMode(false);
    }
  };

  return (
    <textarea
      className="w-full h-[90px] bg-inherit resize-none outline-none "
      autoFocus
      value={LocalStatusText}
      onBlur={() => changeStatus()}
      maxLength={300}
      onChange={(e) => setLocalStatusText(e.target.value)}
    />
  );
};

const AboutMe = () => {
  let status = useAppSelector((state) => state.profile.status);

  const [EditMode, setEditMode] = useState(false);

  return (
    <div className={`lg:border-r-2 m-2 lg:w-1/2 relative group`}>
      <div className={`text-2xl`}>About me</div>
      <div className={`w-full p-2`}>
        {EditMode ? (
          <TextArea setEditMode={setEditMode} status={status} />
        ) : (
          status
        )}
      </div>

      <div
        className={`absolute right-5 top-0 lg:opacity-0 lg:group-hover:opacity-100 transition`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.1}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer"
          onClick={() => setEditMode(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </div>
    </div>
  );
};
export default AboutMe;
