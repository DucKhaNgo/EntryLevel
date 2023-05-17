import { EProductShortTitle, ESessionStatus } from "@/types/session";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

export default function FilterBar() {
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ minWidth: 240 }}>
        <FormControl fullWidth>
          <InputLabel>Title</InputLabel>
          <Select label="Title">
            {(
              Object.keys(
                EProductShortTitle
              ) as (keyof typeof EProductShortTitle)[]
            ).map((x) => (
              <MenuItem value={EProductShortTitle[x]}>{x}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select label="Status">
            {(
              Object.keys(ESessionStatus) as (keyof typeof ESessionStatus)[]
            ).map((x) => (
              <MenuItem value={ESessionStatus[x]}>{x}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}
