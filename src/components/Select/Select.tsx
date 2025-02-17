import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMUI,
} from "@mui/material";
import { ISelectProps } from "./SelectTypes";

export default function Select({
  options,
  selectLabel,
  defaultValue,
  onChange,
}: ISelectProps) {
  return (
    options.length > 0 && (
      <FormControl fullWidth margin="normal">
        {selectLabel && (
          <InputLabel id="simple-select-label">{selectLabel}</InputLabel>
        )}

        <SelectMUI
          id="simple-select-label"
          labelId="simple-select-label"
          value={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          label={selectLabel}
          sx={{ bgcolor: "#fff" }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectMUI>
      </FormControl>
    )
  );
}
