import { FC } from "react";
import { propsForContacts } from "../Contacts";

const Youtube: FC<propsForContacts> = ({ editLink, link, editMode }) => {
  return (
    <div className={`flex items-center`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
        className="w-10 h-10 my-2"
      >
        <path
          fill="currentColor"
          d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z"
        />
      </svg>
      {editMode ? (
        <input
          value={link}
          onChange={(e) => editLink(e.target.value)}
          className={`bg-inherit rounded-sm border w-full p-1 lg:w-1/2`}
        />
      ) : (
        <a href={link} className="mx-2">
          {link}
        </a>
      )}
    </div>
  );
};
export default Youtube;
