import axios from "axios";
import { FETCH_API_START, FETCH_API_SUCCESS, FETCH_API_FAIL } from "../types";

const boredAPILink = "http://www.boredapi.com/api/activity/";

export const getActivity = (link = boredAPILink) => dispatch => {
  dispatch({ type: FETCH_API_START });
  axios
    .get(link)
    .then(res => {
      dispatch({ type: FETCH_API_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_API_FAIL, payload: err });
    });
};
