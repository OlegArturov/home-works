import { Paper, SxProps } from "@mui/material";
import { IPresentationBlockProps } from "./types";

export default function PresentationBlock({
  children,
}: IPresentationBlockProps) {
  const styles: Record<string, SxProps> = {
    wrapper: {
      p: "15px",
      maxWidth: "fit-content",
      bgcolor: "#e9e9eb",
      mb: "25px",
    },
  };
  return <Paper sx={styles.wrapper}>{children}</Paper>;
}
