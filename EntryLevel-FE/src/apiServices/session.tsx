import { IResponse } from "@/types/api";
import axios from "axios";

export async function fetchSessions(
  short_title: string | null,
  status: string | null
) {
  return axios.get<IResponse>("https://d1pjsvwmoem0gh.cloudfront.net/sessions", {
    params: {
      short_title,
      status,
    },
  });
}
