import axios from "axios";
import { showAllErr, clearAllErr } from "./errorActions";
import {
  AUTHENTICATION_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESSFUL,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  LOGIN_FAILED,
  LOGOUT_SUCCESSFUL,
} from "../actions/types";

export const userLoad = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(showAllErr(err.response.data, err.response.status));
      dispatch({ type: AUTHENTICATION_ERROR });
    });
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = { headers: { "Content-type": "application/json" } };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
