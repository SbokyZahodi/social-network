import { FC } from "react";

type props = {
  message: string;
};

const Erorr: FC<props> = ({ message }) => {
  return (
    <div className={`flex items-center text-xl text-red-500 px-2 `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2 mt-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};
export default Erorr;
