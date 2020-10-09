import { AnyAction } from "redux";

import { IRainReducer } from "../../../../recourses/types/rain";

import {
  STOP_RAIN_REDUCER_LOADING,
  GET_RAINFALL_BY_DAYS_ERROR,
  GET_RAINFALL_BY_DAYS_SUCCESS,
  GET_RAINFALL_BY_DAYS_REQUESTING,
} from "./rainActionTypes";

const initialState: IRainReducer = {
  loading: 0,
  error: null,
  rainfallByDays: [],
};

export const rainReducer = (state = initialState, action: AnyAction): IRainReducer => {
  switch (action.type) {
    case GET_RAINFALL_BY_DAYS_REQUESTING: {
      return {
        ...state,
        loading: state.loading++,
      };
    }

    case GET_RAINFALL_BY_DAYS_SUCCESS: {
      return {
        ...state,
        rainfallByDays: action.payload.rainfallByDay,
      };
    }

    case GET_RAINFALL_BY_DAYS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case STOP_RAIN_REDUCER_LOADING: {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }

    default: {
      return state;
    }
  }
}
