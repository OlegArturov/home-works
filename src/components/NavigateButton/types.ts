import { SxProps } from "@mui/material";
import { To } from "react-router-dom";

export interface INavigateButtonProps {
  label: string;
  isFullWidth?: boolean;
  to: To;
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  sx?: SxProps;
}
