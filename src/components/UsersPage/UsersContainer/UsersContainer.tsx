import { FC, useState } from "react";
import AllUsersContainer from "../AllUsersContainer";
import FriendsContainer from "../FriendsContainer";
import Head from "./Head";

const UsersContainer: FC = () => {
  const [Category, setCategory] = useState<"Friends" | "Users">("Friends");

  return (
    <div className={`lg:flex`}>
      <Head Category={Category} setCategory={setCategory} />
      {Category === "Friends" && <FriendsContainer />}
      {Category === "Users" && <AllUsersContainer />}
    </div>
  );
};
export default UsersContainer;
