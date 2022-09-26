import { FC } from "react";

type props = {
  width?: number;
  height?: number;
};

const Preloader: FC<props> = ({ width = 42, height = 24 }) => {
  return (
    <div className={`flex justify-center items-center`}>
      <img src='/img/preloader.gif' alt="" className={`h-24 w-36`} />
    </div>
  );
};
export default Preloader;
