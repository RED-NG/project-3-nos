import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import dayReducer from "./dayReducer";

export default combineReducers({ item: itemReducer, day: dayReducer });
