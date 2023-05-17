import { IResponse } from "@/types/session";
import axios from "axios";

export async function fetchSessions(short_title: string, status: string) {
  return axios.get<IResponse>("http://localhost:3001/sessions", {
    params: {
      short_title,
      status,
    },
  });
}
