import { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { authThunks } from "../../../redux/authReducer/authThunks";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Erorr from "./Error";
import IsPassShowed from "./IsPassShowed";
import RememberMeButton from "./RememberMeButton";

const RightBar = () => {
  const [SeePassword, setSeePassword] = useState(false);
  let dispatch = useAppDispatch();
  let pendingAuth = useAppSelector((state) => state.auth.pending);
  const [RememberMe, setRememberMe] = useState(false);
  let loginErrors = useAppSelector((state) => state.auth.errors);

  const login = (data: FieldValues) => {
    if (data) {
      const { email, password } = data;
      dispatch(
        authThunks.login({
          email: email,
          password: password,
          rememberMe: RememberMe,
        })
      );
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={`lg:w-1/2 p-4 h-full`}>
      <form onSubmit={handleSubmit((data) => login(data))}>
        <div className={`text-xl w-full`}>
          <div className={`mt-10 text-slate-200 text-2xl`}>Email</div>
          <input
            {...register("email", { required: true })}
            type="email"
            className="h-11 text-black mt-4 w-3/4 p-1"
            placeholder="Email"
          />
          {errors.email && <Erorr message="Email is required" />}
        </div>
        <div className={`text-xl w-full`}>
          <div className={`mt-10 text-slate-200 text-2xl`}>Password</div>
          <div className={`flex items-center`}>
            <input
              {...register("password")}
              type={SeePassword ? "text" : "password"}
              className="h-11 text-black mt-4 w-3/4 p-1"
              placeholder="Password"
            />
            <IsPassShowed see={SeePassword} setSeePassword={setSeePassword} />
          </div>
        </div>
        {errors.password && <Erorr message="Password is required" />}
        <div className={`flex items-center`}>
          <div className={`mt-4 text-slate-200 text-2xl`}>Remember Me</div>
          <RememberMeButton
            enabled={RememberMe}
            switchEnabled={setRememberMe}
          />
        </div>
        {loginErrors?.length ? <Erorr message={loginErrors[0]} /> : null}

        <div className={`flex justify-center mt-12`}>
          <input
            disabled={pendingAuth ? true : false}
            value="Sign in"
            type="submit"
            className="bg-[#245FD2] p-3 px-10 rounded-md text-xl shadow-xl cursor-pointer hover:bg-[#296aeb] transition"
          />
        </div>
      </form>
    </div>
  );
};
export default RightBar;
