import axios from "axios";
import { showAllErr } from "./errorActions";
import {
  AUTHENTICATION_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESSFUL,
  SIGNUP_SUCCESSFUL,
  SIGNUP_FAILED,
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

export const signupUser = ({ firstname, lastname, email, password }) => (
  dispatch
) => {
  const config = { headers: { "Content-Type": "application/json" } };

  const body = JSON.stringify({ firstname, lastname, email, password });

  axios
    .post("/api/users", body, config)
    .then((res) => dispatch({ type: SIGNUP_SUCCESSFUL, payload: res.data }))
    .catch((err) => {
      dispatch(
        showAllErr(err.response.data, err.response.status, "SIGNUP_FAILED")
      );
      dispatch({ type: SIGNUP_FAILED });
    });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };

  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then((res) => dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data }))
    .catch((err) => {
      dispatch(
        showAllErr(err.response.data, err.response.status, "LOGIN_FAILED")
      );
      dispatch({ type: LOGIN_FAILED });
    });
};

export const logout = () => {
  return { type: LOGOUT_SUCCESSFUL };
};
