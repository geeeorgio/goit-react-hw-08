import CustomNavLink from "../CustomNavLink/CustomNavLink";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.authWrapper}>
      <Grid>
        <GridItem>
          <CustomNavLink to="/register">Register</CustomNavLink>
        </GridItem>
        <GridItem>
          <CustomNavLink to="/login">Login</CustomNavLink>
        </GridItem>
      </Grid>
    </div>
  );
};

export default AuthNav;
