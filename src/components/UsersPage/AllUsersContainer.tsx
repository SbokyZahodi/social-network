import { FC, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { usersThunks } from "../../redux/usersReducer/usersThunks";
import Preloader from "../FeedPage/Preloader";
import User from "./User";

const AllUsersContainer: FC = () => {
  let dispatch = useAppDispatch();
  let page = useAppSelector((state) => state.users.page);
  let users = useAppSelector((state) => state.users.users);
  let totalCount = useAppSelector((state) => state.users.totalCount);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(usersThunks.getUsersByPage(page));
    }
    dispatch(usersThunks.getTotalUsersCount())
  }, []);

  const loadMoreUsers = () => {
    dispatch(usersThunks.getUsersByPage(page));
  };

  if (users.length === 0) {
    return <Preloader />;
  }

  let usersArray = users.map(({ id, followed, name, photos, status }) => {
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
        dataLength={users.length}
        next={loadMoreUsers}
        hasMore={users.length >= totalCount ? false : true}
        loader={<Preloader />}
        className={`flex flex-col items-center`}
      >
        {usersArray}
      </InfiniteScroll>
    </div>
  );
};
export default AllUsersContainer;
