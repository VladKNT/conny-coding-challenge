import { AnyAction } from "redux";
import { all, takeLatest } from "redux-saga/effects";

import * as rainSaga from "./rain/rainSaga";
import { GET_RAINFALL_BY_DAYS } from "./rain/rainActionTypes";

export function* rootSaga(): Generator<AnyAction> {
  yield all([
    yield takeLatest(GET_RAINFALL_BY_DAYS, rainSaga.getRainfallByDays),
  ]);
}
