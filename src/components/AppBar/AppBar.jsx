import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </>
  );
};

export default AppBar;
