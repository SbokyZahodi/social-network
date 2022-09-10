import { Transition } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  createPost,
  editPost,
} from "../../../redux/profileReducer/profileReducer";
import Dropdown from "./Dropdown";

type props = {
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
  defaultPhoto: string;
};

type post = {
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
  defaultPhoto: string;
  id: string;
  content: string;
};

const Post: FC<post> = ({ photos, defaultPhoto, content, id }) => {
  const [IsShowed, setIsShowed] = useState(false);
  const [EditMode, setEditMode] = useState(false);
  let dispatch = useAppDispatch();

  const TextEdit = () => {
    const [LocalTextContent, setLocalTextContent] = useState("");
    const [IsShowedTextEdit, setIsShowedTextEdit] = useState(true);
    const changePostContent = () => {
      LocalTextContent &&
        dispatch(editPost({ newContent: LocalTextContent, postID: id }));
      setEditMode(false);
    };

    useEffect(() => {
      setLocalTextContent(content);
    }, []);

    return (
      <Transition
        show={IsShowedTextEdit}
        enter="transition duration-100"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className={``}>
          <textarea
            value={LocalTextContent}
            className="w-full p-1 bg-inherit outline-none resize-none h-[200px]"
            autoFocus={true}
            onChange={(e) => setLocalTextContent(e.target.value)}
          ></textarea>
          <button
            className="float-right m-2 bg-zinc-700 hover:bg-zinc-500 transition rounded-md p-1.5 px-10 text-green-500"
            onClick={() => changePostContent()}
          >
            Save
          </button>
        </div>
      </Transition>
    );
  };

  const Content: FC = () => {
    return (
      <p className="w-200px whitespace-pre-wrap break-words max-w-prose">
        {content}
      </p>
    );
  };

  useEffect(() => {
    setIsShowed(true);
  }, []);

  return (
    <Transition
      show={IsShowed}
      enter="transition duration-100 ease-in"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-in"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className={`mt-16`}>
        <div className={`flex mt-5`}>
          <img
            src={photos.large ? photos.large : defaultPhoto}
            alt=""
            className={`w-14 rounded-full h-14`}
          />
          <div
            className={`m-2 mt-3 resize-none outline-none w-[200px] lg:w-[400px] h-full rounded-md p-2`}
            style={{ background: "rgba(217, 217, 217, 0.06)" }}
          >
            {EditMode ? <TextEdit /> : <Content />}
          </div>
          <Dropdown id={id} setEditMode={setEditMode} />
        </div>
      </div>
    </Transition>
  );
};

const Posts: FC<props> = ({ photos, defaultPhoto }) => {
  const [Content, setContent] = useState<string>("");
  let dispatch = useAppDispatch();
  let posts = useAppSelector((state) => state.profile.posts);

  const addPost = () => {
    Content.trimStart().length > 0 &&
      dispatch(createPost({ content: Content }));
    setContent("");
  };

  let arrayOfPosts = posts.map((item) => {
    return (
      <Post
        defaultPhoto={defaultPhoto}
        photos={photos}
        content={item.content}
        id={item.id}
        key={item.id}
      />
    );
  });

  return (
    <div
      className={`mt-5 rounded-sm h-full w-full p-1 lg:p-4`}
      style={{ background: "rgba(217, 217, 217, 0.03)" }}
    >
      <div className={`lg:w-[600px] h-[200px]`}>
        <div className={`flex w-full h-full`}>
          <img
            src={photos.large ? photos.large : defaultPhoto}
            alt=""
            className={`w-14 rounded-full h-14`}
          />
          <textarea
            className={` m-2 mt-3 resize-none outline-none w-full h-full rounded-md p-2`}
            placeholder={"You can typing here..."}
            value={Content}
            style={{ background: "rgba(217, 217, 217, 0.06)" }}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className={`flex justify-end items-center`}>
          <button
            className="bg-zinc-700 px-10 p-1.5 mt-5 mr-2 rounded-md text-green-400 hover:bg-zinc-600 transition "
            onClick={() => addPost()}
          >
            Post
          </button>
        </div>
      </div>
      {arrayOfPosts}
    </div>
  );
};
export default Posts;
