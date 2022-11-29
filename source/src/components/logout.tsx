import { Menu, Transition } from "@headlessui/react";
import { FC } from "react";
import { authThunks } from "../redux/authReducer/authThunks";
import { useAppDispatch } from "../redux/hooks";

const Logout: FC = () => {
  let dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authThunks.logout());
  };

  return (
    <Menu as={"div"} className="relative">
      <Menu.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 my-5  lg:w-9 transition cursor-pointer hover:text-blue-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </Menu.Button>
      <Transition
        enter="transition duration-100"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className={
            "absolute lg:left-10 right-5 bottom-12 w-36 bg-[#4B4A54] p-3 px-10 rounded-md shadow-xl border border-slate-700 cursor-pointer"
          }
        >
          <Menu.Item>
            <div
              className={`text-red-500 text-xl font-medium`}
              onClick={() => logout()}
            >
              Выйти
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Logout;
