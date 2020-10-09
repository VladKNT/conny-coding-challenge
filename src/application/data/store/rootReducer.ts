import { combineReducers } from "redux";

import { rainReducer } from "./rain/rainReduser";

export const rootReducer = combineReducers({
  rainReducer,
});
