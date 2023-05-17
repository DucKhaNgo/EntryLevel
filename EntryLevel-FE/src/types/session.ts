export interface IProgramItem {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
  start_date: string;
  end_date: string;
}

export interface ISession {
  id: string;
  name: string;
  status: ESessionStatus;
  start_date: string;
  end_date: string;
  created_at: string;
  program: IProgramItem[];
}

export interface IResponse {
  data: ISession[]
}

export enum ESessionStatus {
  OFFERING = "OFFERING",
  RUNNING = "RUNNING",
  OFFBOARDING = "OFFBOARDING",
}

export enum EProductShortTitle {
  vc = "vc",
  product = "product",
  data = "data",
  data2 = "data2",
  data3 = "data3",
  scrum = "scrum",
  product2 = "product2",
  growth = "growth",
}
