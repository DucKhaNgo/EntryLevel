"use client";
import { fetchSessions } from "@/apiServices/session";
import CardImage from "@/components/CardImage";
import { IProgramItemWithDates } from "@/types/internalApp";
import { Box, Container, Grid, LinearProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import FilterBar, { FilterState } from "./FilterBar";

export default function Home() {
  const [programItems, setProgramItems] = useState<IProgramItemWithDates[]>([]);
  const [filterState, setFilterState] = useState<FilterState>({
    shortTitle: null,
    status: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchSessions(filterState.shortTitle, filterState.status)
      .then((res) => {
        const programs = res.data.data
          .map((t) =>
            t.program.map((p) => {
              return {
                ...p,
                start_date: t.start_date,
                end_date: t.end_date,
              };
            })
          )
          .flat(1);
        setProgramItems(programs);
      })
      .finally(() => setLoading(false));
  }, [filterState.shortTitle, filterState.status]);

  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <FilterBar filterState={filterState} onSubmit={setFilterState} />
        <Box sx={{ width: "100%", height: 2 }}>
          {loading && <LinearProgress />}
        </Box>

        <Grid flexWrap="wrap" spacing={2} container>
          {programItems.map((t) => {
            return (
              <Grid item xs={4} sm={4} md={3}>
                <CardImage {...t} key={t.id} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}
