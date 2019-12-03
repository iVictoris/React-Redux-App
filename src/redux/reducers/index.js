import { state } from "../state";

import {
  FETCH_API_FAIL,
  FETCH_API_START,
  FETCH_API_SUCCESS
} from "../actions/index";

const replaceCurrentActivity = (
  state = { current: null, previous: [] },
  nextState = { nextCurrent: null, err: "" }
) => {
  const { previous, current } = state;
  const { nextActivity, err } = nextState;
  // if curent isn't null, add to previous array
  const newPrevious = [...previous];
  if (current) newPrevious.push(current);
  const newState = {
    ...state,
    previous: newPrevious,
    current: nextActivity,
    err,
    isFetching: false
  };

  return newState;
};

export const reducer = (initialState = state, action) => {
  let newState;
  switch (action.type) {
    // fetch reducer
    case FETCH_API_START:
      console.log("Fetching start");
      newState = { ...initialState, isFetching: true, err: "" };
      return newState;

    case FETCH_API_SUCCESS:
      console.log('Fetching complete successfully')
      // get previousCurrent and place into previous
      const newStateActivities = replaceCurrentActivity(
        initialState,
        {nextActivity: action.payload}
      );
      newState = {
        ...newStateActivities
      };
      return newState;

    case FETCH_API_FAIL:
      console.log('Fetching completed with error')
      const newErrorState = replaceCurrentActivity(initialState, {
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
