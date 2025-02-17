import { Box, SxProps } from "@mui/material";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

export default function Header() {
  const styles: Record<string, SxProps> = {
    wrapper: {
      height: "60px",
      backgroundColor: "rgb(16, 24, 40)",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
      color: "#fff",
      display: "flex",
    },
    container: {
      maxWidth: "1200px",
      height: "100%",
      width: "100%",
      m: "0 auto",
      p: "0 25px",
      display: "flex",
    },
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <MainNavigation />
      </Box>
    </Box>
  );
}
