import ClearableSelect from "@/components/ClearableSelect";
import { EProductShortTitle, ESessionStatus } from "@/types/api";
import { Box, Stack } from "@mui/material";
export type FilterState = {
  shortTitle: null | EProductShortTitle;
  status: null | ESessionStatus;
};

function FilterBar({
  filterState,
  onSubmit,
}: {
  filterState: FilterState;
  onSubmit: (newState: FilterState) => void;
}) {
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ minWidth: 240 }}>
        <ClearableSelect
          label="Short Title"
          value={filterState.shortTitle}
          options={(
            Object.keys(
              EProductShortTitle
            ) as (keyof typeof EProductShortTitle)[]
          ).map((x) => ({ value: EProductShortTitle[x], label: x }))}
          onChange={(e) => {
            onSubmit({
              ...filterState,
              shortTitle: e.target.value as EProductShortTitle,
            });
          }}
          onClear={() => onSubmit({ ...filterState, shortTitle: null })}
        />
      </Box>

      <Box sx={{ minWidth: 120 }}>
        <ClearableSelect
          label="Status"
          value={filterState.status}
          options={(
            Object.keys(ESessionStatus) as (keyof typeof ESessionStatus)[]
          ).map((x) => ({ value: ESessionStatus[x], label: x }))}
          onChange={(e) =>
            onSubmit({
              ...filterState,
              status: e.target.value as ESessionStatus,
            })
          }
          onClear={() => onSubmit({ ...filterState, status: null })}
        />
      </Box>
    </Stack>
  );
}
export default FilterBar;
