import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { profileThunks } from "../../../../redux/profileReducer/profileThunks";
import Github from "./Contacts/Github";
import Vk from "./Contacts/Vk";
import Youtube from "./Contacts/Youtube";

export type propsForContacts = {
  link: string;
  editLink: any;
  editMode: boolean;
};

const Contacts = () => {
  const [GithubLink, setGithubLink] = useState("");
  const [VkLink, setVkLink] = useState("");
  const [YoutubeLink, setYoutubeLink] = useState("");
  const [EditMode, setEditMode] = useState(false);
  let contacts = useAppSelector((state) => state.profile.profile?.contacts);
  let dispatch = useAppDispatch();
  let status = useAppSelector((state) => state.profile.status);
  let fullname = useAppSelector((state) => state.profile.profile?.fullName);
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);

  useEffect(() => {
    contacts?.github && setGithubLink(contacts?.github);
    contacts?.youtube && setYoutubeLink(contacts?.youtube);
    contacts?.vk && setVkLink(contacts?.vk);
  }, [contacts]);

  const saveContacts = () => {
    fullname &&
      dispatch(
        profileThunks.setContact({
          aboutMe: status ? status : "",
          fullname: fullname,
          github: GithubLink,
          lookingForAJob: false,
          lookingForAJobDescription: "",
          vk: VkLink,
          youtube: YoutubeLink,
        })
      );
    setEditMode(false);
  };

  return (
    <div
      className={`mt-2 lg:mt-0 p-2 pb-12 lg:w-1/2 relative group`}
      style={{ background: "rgba(217, 217, 217, 0.11)" }}
    >
      <div className={`text-xl`}>Contacts</div>
      <div className={``}>
        <Vk link={VkLink} editLink={setVkLink} editMode={EditMode} />
        <Github
          link={GithubLink}
          editLink={setGithubLink}
          editMode={EditMode}
        />
        <Youtube
          link={YoutubeLink}
          editLink={setYoutubeLink}
          editMode={EditMode}
        />
        {EditMode && (
          <button
            className={`absolute right-2 bottom-2 bg-zinc-500 text-green-400 p-1 px-7 rounded-md `}
            onClick={() => saveContacts()}
          >
            Save{" "}
          </button>
        )}
      </div>

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

export default Contacts;
