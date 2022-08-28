import { faker } from "@faker-js/faker";
import { FC } from "react";
import { post } from "../../redux/postsReducer/models";

const Post: FC<post> = ({ id, liked, likes, name, body, img }) => {
  return (
    <div
      className={`p-3 m-3 rounded-md`}
      style={{ background: "rgba(217, 217, 217, 0.13)" }}
    >
      <div className={`flex items-center`}>
        <img src={img} alt="" className="h-16 w-16 rounded-full m-2" />
        <span className="text-lg">{name}</span>
      </div>
      <div className={`m-2`}>{body}</div>
      <div className={`flex justify-end items-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
  );
};
export default Post;
