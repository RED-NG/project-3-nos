import {
  USER_LOADING,
  USER_LOADED,
  AUTHENTICATION_ERROR,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT_SUCCESSFUL,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL: {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    }
    case LOGIN_FAILED:
    case LOGOUT_SUCCESSFUL:
    case REGISTER_FAILED:
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
