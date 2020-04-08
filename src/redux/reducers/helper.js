const createNewState = (state, { err, isFetching }) => ({
  state: {
    ...state,
    err,
    isFetching
  }
});

const moveCurrentToPrevious = clonedState => {
  const { current, previous } = clonedState;
  if (!current) return { state: clonedState};
  return {
    state: { ...clonedState, previous: [current, ...previous] }
  };
};

const addCurrentActivity = (state, nextProps) => {
  const { current } = nextProps;
  const { activityIds } = state;
  return {
    state: { ...state, current, activityIds: [current.key, ...activityIds] }
  };
};

export const addActivity = (
  state = {
    current: null,
    previous: [],
    activityIds: [],
    err: null,
    isFetching: true
  },
  nextProps = { current: null, err: "" }
) => {
  /*
   * This function receives the state and the nextProps
   * Take initial state, clone,
   * check if there's a current activity
   * if there is, move into previous
   * add new activity
   * */

  const clonedState = { ...state };
  const { state: updatedPreviousState } = moveCurrentToPrevious(
    clonedState
  );

  const { current, err } = nextProps;
  const {
    state: updatedActivityState
  } = addCurrentActivity(updatedPreviousState, { current });
  const { state: finalState } = createNewState(updatedActivityState, {
    err,
    isFetching: false
  });

  return finalState;
};

export const checkId = (id, state) => {
  const { activityIds } = state;
  // go through previous ids and see if id exists inside
  return activityIds.includes(id);
};
