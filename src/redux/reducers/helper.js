const createNewState = (initialState, { err, isFetching, activityIds }) => {
  const state = {
    ...initialState,
    err,
    isFetching,
    activityIds
  };

  return state;
};

const moveCurrentToPrevious = initialState => {
  const state = { ...initialState };
  const { current } = state;
  if (current) state.previous.push(state.current);
  return state;
};

const addNewCurrentActivity = (initialState, nextState) => {
  const state = { ...initialState };
  const { current } = nextState;
  moveCurrentToPrevious(state);
  state.current = current;
  const newState = createNewState(state, { ...nextState, isFetching: false });
  return newState;
};

export const replaceCurrentActivity = (
  state = {
    current: null,
    previous: [],
    activityIds: [],
    err: null,
    isFetching: true
  },
  nextState = { current: null, err: "" }
) => {
  const { activityIds } = state;
  const { current, err } = nextState;
  const nextActivityIdState = [current.key, ...activityIds];

  // if curent isn't null, add to previous array
  const newState = addNewCurrentActivity(state, {
    current,
    activityIds: nextActivityIdState,
    err
  });

  return newState;
};

export const checkId = (id, state) => {
  const { activityIds } = state;
  // go through previous ids and see if id exists inside
  return activityIds.includes(id);
};
