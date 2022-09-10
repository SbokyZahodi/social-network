import { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";

const AboutMe: FC = () => {
  let status = useAppSelector((state) => state.profile.status);

  return (
    <div className={`lg:border-r-2 m-2 lg:w-1/2 `}>
      <div className={`text-2xl`}>About me</div>
      <div className={`w-full`}>{status}</div>
    </div>
  );
};
export default AboutMe;
