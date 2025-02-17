import { ListItem, SxProps, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { IMainNavigationItemProps } from "../../types";

export default function MainNavigationItem({
  navItem,
}: IMainNavigationItemProps) {
  const location = useLocation();
  const isNavItemActive =
    navItem.path !== "/"
      ? location.pathname.startsWith(navItem.path)
      : location.pathname === "/";
  const styles: Record<string, SxProps> = {
    wrapper: {
      bgcolor: isNavItemActive ? "rgb(0, 0, 0, .3)" : "iniital",
      transition: "background-color .3s ease",
      borderRadius: "10px",
      a: {
        textDecoration: "none",
        color: "#fff",
        opacity: isNavItemActive ? 1 : ".6",
        transition: "opacity .3s ease",
      },
    },
    text: {},
  };
  return (
    <ListItem sx={styles.wrapper}>
      <NavLink to={navItem.path}>
        <Typography sx={styles.text}>{navItem.title}</Typography>
      </NavLink>
    </ListItem>
  );
}
