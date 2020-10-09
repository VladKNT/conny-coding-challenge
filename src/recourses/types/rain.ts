import { GET_RAINFALL_BY_DAYS } from "../../application/data/store/rain/rainActionTypes";

export interface IRainfallByDay {
  day: number;
  amount: number;
}

export interface IRainReducer {
  loading: number;
  error: string | null;
  rainfallByDays: IRainfallByDay[];
}

export interface IGetRainfallByDayAction {
  type: typeof GET_RAINFALL_BY_DAYS,
}
