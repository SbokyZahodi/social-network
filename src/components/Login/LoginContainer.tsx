import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
