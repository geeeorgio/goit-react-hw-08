import { NavLink } from "react-router-dom";
import s from "./CustomNavLink.module.css";

const CustomNavLink = ({ to, children }) => {
  const changeStyle = ({ isActive }) => (isActive ? s.active : s.item);

  return (
    <NavLink to={to} className={changeStyle}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
