import { faker } from "@faker-js/faker";
import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks";

type props = {
  id: number;
  name: string;
  photo: string;
};

const FriendIcon: FC<props> = ({ id, name, photo }) => {
  return (
    <NavLink to={"/profile/" + id}>
      <img
        src={photo ? photo : "/img/defaultUserPhoto.png"}
        alt=""
        className="w-12 h-12 bg-slate-500 rounded-full"
      />
    </NavLink>
  );
};

const FakeFriends = () => {
  return (
    <img
      src={faker.image.avatar()}
      alt=""
      className="w-12 h-12 bg-slate-500 rounded-full"
    />
  );
};

const Friends = () => {
  let isMyProfile = useAppSelector((state) => state.profile.isMyProfile);
  let friends = useAppSelector((state) => state.users.friends);
  let navigate = useNavigate();

  let friendsArray = friends.map((item) => {
    return (
      <FriendIcon
        id={item.id}
        name={item.name}
        photo={item.photos.large}
        key={item.id}
      />
    );
  });

  const FakeFriendsArray = () => {
    return (
      <>
        <FakeFriends />
        <FakeFriends />
        <FakeFriends />
        <FakeFriends />
        <FakeFriends />
        <FakeFriends />
      </>
    );
  };

  return (
    <div
      className={`mt-4 rounded-md`}
      style={{ background: "rgba(255, 254, 254, 0.11)" }}
    >
      <div className={`flex justify-between p-2 text-lg`}>
        <div className={``}>Friends</div>
        {isMyProfile && (
          <button className={``} onClick={() => navigate("/users")}>
            View All
          </button>
        )}
      </div>
      <div className={`grid grid-cols-3 p-2  place-items-center gap-y-4`}>
        {isMyProfile ? friendsArray : <FakeFriendsArray />}
      </div>
    </div>
  );
};
export default Friends;
