import { GET_RAINFALL_BY_DAYS } from "./rainActionTypes";
import { IGetRainfallByDayAction } from "../../../../recourses/types/rain";

export const getRainfallByDays = (): IGetRainfallByDayAction => ({
  type: GET_RAINFALL_BY_DAYS,
});
