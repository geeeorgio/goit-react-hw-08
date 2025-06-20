import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <Grid>
        <GridItem>
          <CustomNavLink to="/">Home</CustomNavLink>
        </GridItem>
        {isLoggedIn && (
          <GridItem>
            <CustomNavLink to="/contacts">Contacts</CustomNavLink>
          </GridItem>
        )}
      </Grid>
    </nav>
  );
};

export default Navigation;
