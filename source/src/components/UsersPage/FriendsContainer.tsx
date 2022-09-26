import { FC, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { usersThunks } from "../../redux/usersReducer/usersThunks";
import Preloader from "../FeedPage/Preloader";
import User from "./User";

const FriendsContainer: FC = () => {
  let dispatch = useAppDispatch();
  let friends = useAppSelector((state) => state.users.friends);
  let totalCount = useAppSelector((state) => state.users.totalCount);

  useEffect(() => {
    dispatch(usersThunks.getFriends());
  }, []);

  let usersArray = friends.map(({ id, followed, name, photos, status }) => {
    return (
      <User
        id={id}
        name={name}
        status={status}
        avatar={photos.small}
        followed={followed}
        key={id}
      />
    );
  });

  return (
    <div className={``}>
      <InfiniteScroll
        dataLength={friends.length}
        next={() => {}}
        hasMore={friends.length >= totalCount ? false : true}
        loader={<Preloader />}
        className={`flex flex-col items-center`}
      >
        {usersArray}
      </InfiniteScroll>
    </div>
  );
};
export default FriendsContainer;
