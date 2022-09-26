import { FC } from "react";

type props = {
  Category: "Friends" | "Users";
  setCategory: (category: "Friends" | "Users") => void;
};

const Head: FC<props> = ({ Category, setCategory }) => {
  enum styles {
    users = "w-1/2 h-[1px] bg-slate-50 translate-x-full transition lg:hidden",
    friends = "w-1/2 h-[1px] bg-slate-50 transition lg:hidden",
  }

  return (
    <>
      {/* Desktop */}
      <div className={``}>
        <div className={`sticky top-0 `}>
          <div className={`lg:hidden`}>
            <div
              className={`flex  justify-around items-center h-14 bg-[#373A3E] `}
            >
              <div
                className={`w-full text-center lg:cursor-pointer`}
                onClick={() => setCategory("Friends")}
              >
                Friends
              </div>
              <div
                className={`w-full text-center lg:cursor-pointer`}
                onClick={() => setCategory("Users")}
              >
                All users
              </div>
            </div>
            {/* Line */}
            <div
              className={Category === "Friends" ? styles.friends : styles.users}
            ></div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      {/* Mobille */}
      <div className={`m-10 hidden lg:block sticky top-0`}>
        <div
          className={`text-2xl m-2 p-2 px-10 cursor-pointer hover:bg-[#5f5f61] rounded-md transition ${
            Category === "Friends" && "bg-[#3D3E43]"
          }`}
          onClick={() => setCategory("Friends")}
        >
          Friends
        </div>
        <div
          className={`text-2xl m-2 p-2 px-10 cursor-pointer hover:bg-[#5f5f61] rounded-md transition ${
            Category === "Users" && "bg-[#3D3E43]"
          }`}
          onClick={() => setCategory("Users")}
        >
          All users
        </div>
      </div>
      {/* Mobille */}
    </>
  );
};
export default Head;
