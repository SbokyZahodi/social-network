import profilePhoto from "../assets/testProfile.png";

const Post = () => {
  return (
    <div className={`mt-16`}>
      <div className={`flex w-full mt-5`}>
        <img src={profilePhoto} alt="" className={`w-14 rounded-full h-14`} />
        <div
          className={` m-2 mt-3 resize-none outline-none w-full lg:w-1/2 h-full rounded-md p-2`}
          style={{ background: "rgba(217, 217, 217, 0.06)" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          eaque, in non eum porro id quia, fugiat, doloremque officia tenetur
          quod. Facere assumenda ipsa odit placeat numquam iure asperiores
          consequatur!
        </div>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <div
      className={`mt-5 rounded-sm h-full w-full p-4`}
      style={{ background: "rgba(217, 217, 217, 0.03)" }}
    >
      <div className={`flex w-full h-[200px]`}>
        <img src={profilePhoto} alt="" className={`w-14 rounded-full h-14`} />
        <textarea
          className={` m-2 mt-3 resize-none outline-none w-full lg:w-1/2 h-full rounded-md p-2`}
          placeholder={"You can typing here..."}
          style={{ background: "rgba(217, 217, 217, 0.06)" }}
        />
      </div>
      <Post />
    </div>
  );
};
export default Posts;