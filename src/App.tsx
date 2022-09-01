import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import FeedContainer from "./components/Feed/FeedContainer";
import LoginContainer from "./components/Login/LoginContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Sidebar from "./components/sidebar";
import UsersContainer from "./components/Users/UsersContainer/UsersContainer";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  type routesType = {
    path: string;
    component: ReactNode;
  }[];
  let isAuth = useAppSelector((state) => state.auth.isAuth);

  const routes: routesType = [
    { path: "/profile", component: <ProfileContainer /> },
    { path: "/feed", component: <FeedContainer /> },
    { path: "/messages", component: <MessagesContainer /> },
    { path: "/users", component: <UsersContainer /> },
    { path: "/login", component: <LoginContainer /> },
  ];

  // if (!isAuth) {
  //   return <LoginContainer />;
  // }

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
