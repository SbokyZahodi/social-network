import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const redirect = useNavigate();
  useEffect(() => {
    redirect("login");
  }, []);

  return (
    <div className={`w-screen h-screen flex items-center justify-center`}>
      <LoginForm />
    </div>
  );
};
export default Login;
