import { useAppSelector } from "../../../redux/hooks";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div
      className={`fixed w-full h-full flex items-start lg:items-center  lg:p-0 justify-center top-0 overflow-auto `}
    >
      <div
        className={`bg-[#21232B] lg:w-[500px] w-[300px] lg:h-[700px]  rounded-md shadow-xl`}
      >
        <div className={`border-b pb-4`}>
          <div className={`flex justify-between`}>
            <div className={`flex p-4`}>
              <img
                src="/img/defaultUserPhoto.png"
                alt=""
                className="w-16 h-16 rounded-full"
              />
              <span className="text-xl px-4 py-2">John Seena</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 m-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className={`px-4`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            necessitatibus sequi reprehenderit doloremque autem! Laudantium quas
            magnam voluptatem voluptate sapiente, vel officia amet porro
            deserunt, beatae omnis eaque animi doloremque.
          </div>
          <button className="p-1 mx-2 my-1 px-4 rounded-md border flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="mx-1">14</span>
          </button>
        </div>
        <div className={`overflow-auto h-[250px] lg:h-[350px]`}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <AddComment />
      </div>
    </div>
  );
};
export default Comments;
