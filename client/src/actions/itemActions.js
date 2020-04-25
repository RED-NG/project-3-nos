import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ADD_DAY,
  ITEMS_LOADING,
  GET_DAYS,
  DELETE_DAY,
} from "./types";
import { tokenConfig } from "./authActions";
import { showAllErr } from "./errorActions";
import axios from "axios";

//items
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then((res) => dispatch({ type: GET_ITEMS, payload: res.data }))
    .catch((err) =>
      dispatch(showAllErr(err.response.data, err.response.status))
    );
};

export const deleteItems = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then((res) => dispatch({ type: DELETE_ITEM, payload: id }))
    .catch((err) =>
      dispatch(showAllErr(err.response.data, err.response.status))
    );
};

export const addItem = (item) => (dispatch, getState) => {
  console.log(`item at addItem`, item);
  axios
    .post("/api/items", item, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }))
    .catch((err) =>
      dispatch(showAllErr(err.response.data, err.response.status))
    );
};

//days
export const getDays = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items/day")
    .then((res) => dispatch({ type: GET_DAYS, payload: res.data }))
    .catch((err) =>
      dispatch(showAllErr(err.response.data, err.response.status))
    );
};

export const addDay = (day) => (dispatch, getState) => {
  console.log(`item at addDay`, day);
  axios
    .post("/api/items/day", day, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_DAY, payload: res.data }))
    .catch((err) =>
      dispatch(showAllErr(err.response.data, err.response.status))
    );
};

export const deleteDay = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/items/day/${id}`, tokenConfig(getState))
    .then((res) => dispatch({ type: DELETE_DAY, payload: id }))
    .catch((err) =>
      dispatch(showAllErr(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return { type: ITEMS_LOADING };
};
