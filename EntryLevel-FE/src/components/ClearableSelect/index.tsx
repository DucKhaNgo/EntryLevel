import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";

export default function ClearableSelect<
  T extends string | number | readonly string[] | undefined
>({
  label,
  value,
  onChange,
  onClear,
  options,
}: Omit<SelectProps<T>, "value"> & {
  value: T | null;
  options: { value: T; label: string | React.ReactNode }[];
  onClear: () => void;
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id="custom-select-label">{label}</InputLabel>
      <Select
        labelId="clearable-select-label"
        label={label}
        id="clearable-select"
        value={value ?? ""}
        onChange={onChange}
        displayEmpty
        sx={{
          "& .MuiSelect-iconOutlined": { display: value ? "none" : "" },
          "&.Mui-focused .MuiIconButton-root": { color: "primary.main" },
        }}
        // renderValue={(value) => (value ? value : null)}
        endAdornment={
          <IconButton
            sx={{ visibility: value ? "visible" : "hidden" }}
            onClick={onClear}
          >
            <HighlightOffIcon />
          </IconButton>
        }
      >
        {options.map((option) => {
          return <MenuItem value={option.value}>{option.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
