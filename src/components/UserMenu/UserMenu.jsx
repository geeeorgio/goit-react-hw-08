import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import { selectUser } from "../../redux/auth/selectors";
import { userLogout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    try {
      await dispatch(userLogout()).unwrap();
      toast.success("Goodbye! See you next time!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={s.userMenuWrapper}>
      <Grid>
        <GridItem>
          <p className={s.welcomeText}>Welcome, {user.name}!</p>
        </GridItem>
        <GridItem>
          <Button type="button" className={s.logOutBtn} onClick={handleLogout}>
            <LogOut />
            Log Out
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default UserMenu;
