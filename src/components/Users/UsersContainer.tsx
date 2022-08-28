import { FC, useState } from "react";
import AllUsersContainer from "./AllUsersContainer";
import FriendsContainer from "./FriendsContainer";

const UsersContainer: FC = () => {
  const [Category, setCategory] = useState<"Friends" | "Users">("Friends");

  enum styles {
    users = "w-1/2 h-[1px] bg-slate-50 translate-x-full transition",
    friends = "w-1/2 h-[1px] bg-slate-50 transition",
  }

  return (
    <>
      <div className={`sticky top-0`}>
        <div className={``}>
          <div
            className={`flex justify-around items-center h-14 bg-[#373A3E] `}
          >
            <div className={``} onClick={() => setCategory("Friends")}>
              Friends
            </div>
            <div className={``} onClick={() => setCategory("Users")}>
              All users
            </div>
          </div>
          {/* Line */}
          <div
            className={Category === "Friends" ? styles.friends : styles.users}
          ></div>
        </div>
      </div>

      {Category === "Friends" && <FriendsContainer />}
      {Category === "Users" && <AllUsersContainer />}
    </>
  );
};
export default UsersContainer;
