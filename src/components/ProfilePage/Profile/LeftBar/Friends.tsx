import { faker } from "@faker-js/faker";
import { useAppSelector } from "../../../../redux/hooks";

const FriendIcon = () => {
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

  return (
    <div
      className={`mt-4 rounded-md`}
      style={{ background: "rgba(255, 254, 254, 0.11)" }}
    >
      <div className={`flex justify-between p-2 text-lg`}>
        <div className={``}>Friends</div>
        {isMyProfile && <button className={``}>View All</button>}
      </div>
      <div className={`grid grid-cols-3 p-2  place-items-center gap-y-4`}>
        <FriendIcon />
        <FriendIcon />
        <FriendIcon />
        <FriendIcon />
        <FriendIcon />
        <FriendIcon />
      </div>
    </div>
  );
};
export default Friends;
