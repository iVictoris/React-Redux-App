import { state } from "../state";

import {
  FETCH_API_FAIL,
  FETCH_API_START,
  FETCH_API_SUCCESS
} from "../actions/index";

import { addActivity, checkId } from "./helper";

export const reducer = (initialState = state, action) => {
  let newState;
  switch (action.type) {
    // fetch reducer
    case FETCH_API_START:
      newState = { ...initialState, isFetching: true, err: "" };
      return newState;

    case FETCH_API_SUCCESS:
      const oldState = { ...initialState };
      const { key } = action.payload;
      const isInvalidId = checkId(key, oldState);

      if (isInvalidId) return initialState;
      // get previousCurrent and place into previous
      const newStateActivities = addActivity(initialState, {
        current: action.payload
      });
      // add key to list of Ids for easier filtering

      newState = {
        ...newStateActivities
      };
      return newState;

    case FETCH_API_FAIL:
      const newErrorState = addActivity(initialState, {
        err: action.payload
      });
      newState = {
        ...newErrorState
      };
      return newState;

    // end fetch reducer

    default:
      return initialState;
  }
};
