import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { INavigateButtonProps } from "./types";

export default function NavigateButton({
  to,
  isFullWidth,
  label,
  color = "primary",
  sx,
}: INavigateButtonProps) {
  const navigate = useNavigate();
  const handleOnButtonClick = () => {
    navigate(to);
  };
  return (
    <Button
      sx={sx}
      label={label}
      isFullWidth={isFullWidth}
      color={color}
      type="button"
      onClick={handleOnButtonClick}
    />
  );
}
