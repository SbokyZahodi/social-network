import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import StatusEditor from "./StatusEditor";

const AboutMe = () => {
  const [EditMode, setEditMode] = useState(false);
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);
  let status = useAppSelector((state) => state.profile.status);
  const [NewStatusText, setNewStatusText] = useState("");

  useEffect(() => {
    status && setNewStatusText(status);
  }, [status]);

  const ContentBlock = () => {
    return <div className={`mt-2`}>{status}</div>;
  };

  return (
    <div
      className={`p-2 pb-12 lg:w-1/2 lg:mr-2 relative group`}
      style={{ background: "rgba(217, 217, 217, 0.11)" }}
    >
      <div className={`text-xl`}>About me:</div>
      {EditMode ? (
        <StatusEditor
          NewStatusText={NewStatusText}
          setNewStatusText={setNewStatusText}
          setEditMode={setEditMode}
          status={status}
        />
      ) : (
        <ContentBlock />
      )}
      {isMyProfile && <EditPost setEditMode={setEditMode} />}
    </div>
  );
};

const EditPost: FC<{ setEditMode: any }> = ({ setEditMode }) => {
  return (
    <div
      className={`absolute right-3 top-3 lg:group-hover:opacity-100 lg:opacity-0 transition`}
      onClick={() => setEditMode(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
    </div>
  );
};

export default AboutMe;
