import { faker } from "@faker-js/faker";
import { FC } from "react";
import { post } from "../../redux/postsReducer/models";
import Buttons from "./Buttons";
import Comments from "./Comments/Comments";

const Post: FC<post> = ({ id, liked, likes, name, body, img }) => {
  return (
    <div
      className={`p-3 m-3 rounded-md lg:w-1/3`}
      style={{ background: "rgba(217, 217, 217, 0.13)" }}
    >
      <div className={`flex items-center`}>
        <img src={img} alt="" className="h-16 w-16 rounded-full m-2" />
        <span className="text-lg">{name}</span>
      </div>
      <div className={`m-2`}>{body}</div>
      <Buttons id={id} likes={likes} liked={liked} />
    </div>
  );
};
export default Post;
