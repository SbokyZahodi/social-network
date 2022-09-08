import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import LoginForm from "./LoginForm";

const Login = () => {
  const redirect = useNavigate();
  let isAuth = useAppSelector((state) => state.auth.isAuth);

  let pendingAuth = useAppSelector((state) => state.auth.pending);

  useEffect(() => {
    isAuth && redirect("/feed");
    !isAuth && redirect("login");
  }, []);

  return (
    <div className={`w-screen h-screen flex items-center justify-center`}>
      <LoginForm pendingAuth={pendingAuth} />
    </div>
  );
};
export default Login;
