import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  deletePost,
  editPost,
} from "../../../../../redux/profileReducer/profileReducer";
import Dropdown from "./Dropdown";
import defaultUserPhoto from '../../../../../assets/img/defaultUserPhoto.png'

const ContentBlock: FC<{ content: string }> = ({ content }) => {
  return (
    <div
      className={`w-[200px] lg:w-[300px] p-1 m-1 rounded-md break-words outline-none`}
      style={{ background: "rgba(217, 217, 217, 0.1)" }}
    >
      {content}
    </div>
  );
};

const Post: FC<{ content: string; id: string }> = ({ content, id }) => {
  let dispatch = useAppDispatch();
  const [EditMode, setEditMode] = useState(false);
  let avatar = useAppSelector((state) => state.profile.profile?.photos.large);
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);
  const [NewPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    setNewPostContent(content);
  }, []);

  const removePost = () => {
    dispatch(deletePost({ id: id }));
  };

  const editPostFunc = () => {
    dispatch(editPost({ postID: id, newContent: NewPostContent }));
    setEditMode(false);
  };

  return (
    <div className={`flex mt-5`}>
      <img
        src={avatar ? avatar : defaultUserPhoto}
        alt=""
        className="w-[46px] h-[46px] rounded-full"
      />

      {EditMode ? (
        <div className={``}>
          <textarea
            className={`w-[200px] lg:w-[300px] p-1 m-1 rounded-md break-words h-[200px] outline-none resize-none`}
            style={{ background: "rgba(217, 217, 217, 0.1)" }}
            value={NewPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end">
            <button
              className=" p-1.5 px-6 rounded-md text-green-500 text-lg"
              style={{ background: "rgba(217, 217, 217, 0.14)" }}
              onClick={() => editPostFunc()}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <ContentBlock content={NewPostContent} />
      )}

      {isMyProfile && (
        <Dropdown setEditMode={setEditMode} removePost={removePost} />
      )}
    </div>
  );
};
export default Post;
