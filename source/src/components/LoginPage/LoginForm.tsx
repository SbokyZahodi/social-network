import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { authThunks } from "../../redux/authReducer/authThunks";
import { useAppDispatch } from "../../redux/hooks";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

const LoginForm: FC = () => {
  return (
    <div className={`w-full h-full flex justify-center lg:items-center`}>
      <div
        className={`top-0 w-[800px] lg:h-[500px] lg:flex`}
        style={{ background: "rgba(217, 217, 217, 0.04)" }}
      >
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
};

export default LoginForm;
