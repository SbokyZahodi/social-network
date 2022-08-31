import { FC } from "react";
import { NavLink } from "react-router-dom";

const SvgLink: FC<{ path: string; route: string }> = ({ path, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 my-5  lg:w-9 transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </NavLink>
  );
};

export const Sidebar = () => {
  return (
    <div
      className={`fixed w-full lg:w-[5%] bottom-0 h-[8%] lg:h-screen flex items-center lg:flex-col justify-around lg:justify-start   bg-[#4B4A54]`}
    >
      <SvgLink
        path="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        route="/feed"
      />
      <SvgLink
        path="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        route="/profile"
      />
      <SvgLink
        path="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        route="/messages"
      />
      <SvgLink
        path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        route="/users"
      />
    </div>
  );
};
export default Sidebar;
