import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  onChange?: (e: string) => void;
}
export default function InputShortTitle(props: Props) {
  const { onChange } = props;
  const [value, setValue] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChange && onChange(value);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [value]);
  return (
    <TextField
      label="Title"
      onChange={(e) => {
        setValue(e.target.value ?? "");
      }}
    />
  );
}
