import { FC } from "react";

type props = {
  width?: number;
  height?: number;
};

const Preloader: FC<props> = ({ width = 42, height = 24 }) => {
  return (
    <div className={`flex justify-center items-center`}>
      {/* <img src='/img/preloader.gif' alt="" className={`h-24 w-36`} /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        className="h-12 w-12"
      >
        <path
          fill="currentColor"
          d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            from="0 12 12"
            repeatCount="indefinite"
            to="360 12 12"
            type="rotate"
          />
        </path>
      </svg>
    </div>
  );
};
export default Preloader;
