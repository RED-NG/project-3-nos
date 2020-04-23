import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ADD_DAY,
  ITEMS_LOADING,
  GET_DAYS,
  DELETE_DAY,
} from "./types";

import axios from "axios";

//items
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then((res) => dispatch({ type: GET_ITEMS, payload: res.data }));
};

export const deleteItems = (id) => (dispatch) => {
  axios
    .delete(`/api/items/${id}`)
    .then((res) => dispatch({ type: DELETE_ITEM, payload: id }));
};

export const addItem = (item) => (dispatch) => {
  console.log(`item at addItem`, item);
  axios
    .post("/api/items", item)
    .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }));
};

//days
export const getDays = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items/day")
    .then((res) => dispatch({ type: GET_DAYS, payload: res.data }));
};

export const addDay = (day) => (dispatch) => {
  console.log(`item at addDay`, day);
  axios
    .post("/api/items/day", day)
    .then((res) => dispatch({ type: ADD_DAY, payload: res.data }));
};

export const deleteDay = (id) => (dispatch) => {
  axios
    .delete(`/api/items/day/${id}`)
    .then((res) => dispatch({ type: DELETE_DAY, payload: id }));
};

export const setItemsLoading = () => {
  return { type: ITEMS_LOADING };
};
