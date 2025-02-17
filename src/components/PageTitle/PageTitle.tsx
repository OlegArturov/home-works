import { IPageTitleProps } from "./types";
import { SxProps, Typography } from "@mui/material";

export default function PageTitle({ text }: IPageTitleProps) {
  const styles: Record<string, SxProps> = {
    text: {
      fontWeight: "600",
    },
  };
  return (
    <Typography component={"h3"} sx={styles.text}>
      {text}
    </Typography>
  );
}
