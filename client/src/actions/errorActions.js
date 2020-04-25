import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const showAllErr = (msg, status, id = null) => {
  return { type: GET_ERRORS, payload: { msg, status, id } };
};

export const clearAllErr = () => {
  return { type: CLEAR_ERRORS };
};
