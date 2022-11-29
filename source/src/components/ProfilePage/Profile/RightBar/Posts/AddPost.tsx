import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { createPost } from "../../../../../redux/profileReducer/profileReducer";
import Editor from "./Editor";

const AddPost = () => {
  const [Content, setContent] = useState("");
  let dispatch = useAppDispatch();
  let avatar = useAppSelector((state) => state.profile.profile?.photos.large);

  const createPostFunc = () => {
    Content.trimStart().length && dispatch(createPost({ content: Content }));
    setContent("");
  };

  return (
    <div className={`lg:w-[500px]`}>
      <img
        src={avatar ? avatar : '/img/defaultUserPhoto.png'}
        alt=""
        className="w-[46px] rounded-full"
      />
      <Editor setContent={setContent} content={Content} />
      <div className={`flex justify-end `}>
        <button
          className="text-xl p-0.5 m-2 px-8 rounded-md text-green-500"
          style={{ background: "rgba(217, 217, 217, 0.14)" }}
          onClick={() => createPostFunc()}
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default AddPost;
