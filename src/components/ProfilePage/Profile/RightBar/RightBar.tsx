import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Posts from "./Posts/Posts";

const RightBar = () => {
  return (
    <div className={`p-2 w-full`}>
      <div className={`lg:flex lg:h-[220px]`}>
        <AboutMe />
        <Contacts />
      </div>
      <Posts />
    </div>
  );
};
export default RightBar;
