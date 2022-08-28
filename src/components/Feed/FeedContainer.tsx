import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {} from "../../redux/postsReducer/postsReducer";
import { postsThunks } from "../../redux/postsReducer/postsThunks";
import Post from "./Post";
import Preloader from "./Preloader";

const FeedContainer = () => {
  let users = useAppSelector((state) => state.posts.posts);
  let start = useAppSelector((state) => state.posts.start);
  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postsThunks.getPosts());
  }, []);

  const loadMorePostsFunc = () => {
    dispatch(postsThunks.loadMorePosts(start));
  };

  let posts = users.map(({ id, body, img, name, liked, likes }) => {
    return (
      <Post
        id={id}
        body={body}
        key={id}
        liked={liked}
        likes={likes}
        name={name}
        img={img}
      />
    );
  });

  if (users.length === 0) {
    return <Preloader />;
  }

  return (
    <div className={`mb-20`}>
      <InfiniteScroll
        dataLength={users.length}
        next={loadMorePostsFunc}
        hasMore={users.length === 100 ? false : true}
        loader={<Preloader />}
      >
        {posts}
      </InfiniteScroll>
    </div>
  );
};
export default FeedContainer;
