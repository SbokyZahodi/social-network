import { faker } from "@faker-js/faker";
import { useAppSelector } from "../../../../../redux/hooks";
import AddPost from "./AddPost";
import Post from "./Post";

const Posts = () => {
  let posts = useAppSelector((state) => state.profile.posts);
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);

  let arrayOfPosts = posts.map((item) => {
    return <Post content={item.content} key={item.id} id={item.id} />;
  });

  const FakePosts = () => {
    return (
      <>
        <Post content={faker.lorem.text()} id={""} />
        <Post content={faker.lorem.text()} id={""} />
        <Post content={faker.lorem.text()} id={""} />
        <Post content={faker.lorem.text()} id={""} />
     
      </>
    );
  };

  return (
    <div
      className={`p-2 mt-5 h-full`}
      style={{ background: "rgba(217, 217, 217, 0.11)" }}
    >
      {isMyProfile && <AddPost />}
      <div className={``}>{isMyProfile ? arrayOfPosts : <FakePosts />}</div>
    </div>
  );
};
export default Posts;
