import { IProgramItem } from "../api";

export interface IProgramItemWithDates extends IProgramItem {
  start_date: string;
  end_date: string;
}
