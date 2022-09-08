import { ReactNode, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FeedContainer from "./components/FeedPage/FeedContainer";
import LoginContainer from "./components/LoginPage/LoginContainer";
import MessagesContainer from "./components/MessagesPage/MessagesContainer";
import ProfileContainer from "./components/ProfilePage/ProfileContainer";

import Sidebar from "./components/sidebar";
import UsersContainer from "./components/UsersPage/UsersContainer/UsersContainer";
import { authThunks } from "./redux/authReducer/authThunks";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  type routesType = {
    path: string;
    component: ReactNode;
  }[];
  let isAuth = useAppSelector((state) => state.auth.isAuth);
  let dispatch = useAppDispatch();
  const routes: routesType = [
    { path: "/profile/:id", component: <ProfileContainer /> },
    { path: "/feed", component: <FeedContainer /> },
    { path: "/messages", component: <MessagesContainer /> },
    { path: "/users", component: <UsersContainer /> },
    { path: "/login", component: <LoginContainer /> },
  ];

  useEffect(() => {
    dispatch(authThunks.authMe());
  }, []);

  if (isAuth === null) {
    return null;
  }

  if (!isAuth) {
    return <LoginContainer />;
  }

  return (
    <div className={`lg:flex`}>
      <div className={`lg:w-[5%]`}>
        <Sidebar />
      </div>
      <div className={`lg:w-[95%]`}>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Routes>
      </div>
    </div>
  );
};
export default App;
