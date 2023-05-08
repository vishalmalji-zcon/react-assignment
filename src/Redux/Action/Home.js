import { GET_COUNT, GET_COUNT_FAILURE, GET_COUNT_SUCCESS } from "../Constant";

export const getCount = (obj) => {
  return { type: GET_COUNT, payload: {} };
};

export const getCountSuccess = (obj) => {
  console.log("getCountSuccess",obj)
  return { type: GET_COUNT_SUCCESS, payload: obj };
};

export const getCountFailure = (obj) => {
  return { type: GET_COUNT_FAILURE, payload: {} };
};
