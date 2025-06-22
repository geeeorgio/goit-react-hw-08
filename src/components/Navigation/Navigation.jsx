import { useSelector } from "react-redux";
import { BiSolidContact } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
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
          <CustomNavLink to="/">
            <IoHomeOutline />
            Home
          </CustomNavLink>
        </GridItem>
        {isLoggedIn && (
          <GridItem>
            <CustomNavLink to="/contacts">
              <BiSolidContact />
              Contacts
            </CustomNavLink>
          </GridItem>
        )}
      </Grid>
    </nav>
  );
};

export default Navigation;
