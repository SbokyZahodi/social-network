import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [Data, setData] = useState<string>();

  enum styles {
    active = "asd",
  }

  return (
    <div className={`h-[300px] w-[300px] bg-[#373E48] rounded-md`}>
      <div className={`text-3xl text-center m-2`}>Sign in</div>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className={``}>
          <div className={`text-xl border-b-2 w-1/2 mx-2  `}>
            Введите e-mail
          </div>
          <input
            type="e-mail"
            className="p-1 m-2 rounded-sm w-4/5"
            {...register("email")}
          />
        </div>
        <div className={``}>
          <div className={`text-xl border-b-2 w-1/2 mx-2  `}>
            Введите пароль
          </div>
          <input
            type="e-mail"
            className="p-1 m-2 rounded-sm w-4/5"
            {...register("password")}
          />
        </div>
        <input type="text"/>
        <input type="submit" />
      </form>
    </div>
  );
};
export default LoginForm;
