import { FC } from "react";
import preloader from '../../../public/img/preloader.gif'

type props = {
  width?: number;
  height?: number;
};

const Preloader: FC<props> = ({ width = 42, height = 24 }) => {
  return (
    <div className={`flex justify-center items-center`}>
      <img src={preloader} alt="" className={`h-${height} w-${width}`} />
    </div>
  );
};
export default Preloader;
