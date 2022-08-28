import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedContainer from "./components/Feed/FeedContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Sidebar from "./components/sidebar";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  type routesType = { path: string; component: ReactNode }[];

  const routes: routesType = [
    { path: "/feed", component: <FeedContainer /> },
    { path: "/profile", component: <ProfileContainer /> },
    { path: "/messages", component: <MessagesContainer /> },
    { path: "/users", component: <UsersContainer /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
};
export default App;
