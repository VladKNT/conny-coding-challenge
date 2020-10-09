import { AnyAction } from "redux";
import { put } from "redux-saga/effects";

import { IRainfallByDay } from "../../../../recourses/types/rain";

import {
  GET_RAINFALL_BY_DAYS_ERROR,
  GET_RAINFALL_BY_DAYS_SUCCESS,
  GET_RAINFALL_BY_DAYS_REQUESTING
} from "./rainActionTypes";

export function* getRainfallByDays(): Generator<AnyAction> {
  try {
    yield put({ type: GET_RAINFALL_BY_DAYS_REQUESTING });

    // TODO: Add request to a JSON server
    const rainfallByDays: IRainfallByDay[] = [];

    yield put({
      type: GET_RAINFALL_BY_DAYS_SUCCESS,
      payload: { rainfallByDays },
    });
  } catch (error) {
    yield put({
      type: GET_RAINFALL_BY_DAYS_ERROR,
      payload: {
        error: error.message,
      },
    });

  } finally {
    yield put({ type: GET_RAINFALL_BY_DAYS_REQUESTING });
  }
}
