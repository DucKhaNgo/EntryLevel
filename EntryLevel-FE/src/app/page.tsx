"use client";
import { fetchSessions } from "@/apiServices/session";
import CardImage from "@/components/CardImage";
import InputShortTitle from "@/components/Input/InputShortTitle";
import { IProgramItem } from "@/types/session";
import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { JSX, useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import pageStyle from "./page.module.css";
export default function Home() {
  const [imageInfos, setImageInfos] = useState<IProgramItem[]>([]);
  const [shortTitle, setShortTitle] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function getSessions(shortTitle: string, status: string) {
      setLoading(true);
      fetchSessions(shortTitle, status)
        .then((res) => {
          const _info = res.data.data
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
          setImageInfos(_info);
        })
        .finally(() => setLoading(false));
    }
    getSessions(shortTitle, status);
  }, [shortTitle, status]);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus((event.target.value as string) || "");
  };
  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <FilterBar />
        <Box sx={{ width: "100%", height: 2 }}>
          {loading && <LinearProgress />}
        </Box>

        <Grid flexWrap="wrap" spacing={2} container>
          {imageInfos.map((t: JSX.IntrinsicAttributes & IProgramItem) => {
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
