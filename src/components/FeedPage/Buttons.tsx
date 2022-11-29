import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { switchLike } from "../../redux/postsReducer/postsReducer";

type props = {
  id: number;
  likes: number;
  liked: boolean;
};

const Buttons: FC<props> = ({ id, likes, liked }) => {
  let dispatch = useAppDispatch();

  const setLike = () => {
    dispatch(switchLike(id));
  };

  return (
    <div className={`flex justify-end items-center`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-8 w-8 mx-2 cursor-pointer transition ${liked && 'fill-red-500 text-red-500 '}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
        onClick={() => setLike()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span
        className="p-2 rounded-md px-4"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      >
        {likes}
      </span>
    </div>
  );
};
export default Buttons;
