import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import dayReducer from "./dayReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  item: itemReducer,
  day: dayReducer,
  auth: authReducer,
  error: errorReducer,
});
