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
        <div
          className={`bg-[#373A3E]  mt-10 p-3 rounded-sm flex items-center `}
        >
          <input
            type="text"
            className={` outline-none bg-inherit p-1`}
            placeholder="Seach..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* Mobille */}
    </>
  );
};
export default Head;
