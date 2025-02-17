import { List, SxProps } from "@mui/material";
import useMainNavigation from "./hooks/useMainNavigation";
import MainNavigationItem from "./components/MainNavigationItem/MainNavigationItem";

export default function MainNavigation() {
  const { mainNavigaTionItems } = useMainNavigation();
  const styles: Record<string, SxProps> = {
    wrapper: {
      display: "flex",
    },
  };
  return (
    <List sx={styles.wrapper}>
      {mainNavigaTionItems.map((navItem, index) => (
        <MainNavigationItem key={index} navItem={navItem} />
      ))}
    </List>
  );
}
