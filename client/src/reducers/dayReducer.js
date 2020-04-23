import { ADD_DAY, GET_DAYS, ITEMS_LOADING, DELETE_DAY } from "../actions/types";

const initialState = {
  days: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DAYS:
      return { ...state, days: action.payload, loading: false };

    case ADD_DAY:
      return {
        ...state,
        days: [action.payload, ...state.days],
      };

    case DELETE_DAY:
      return {
        ...state,
        items: state.days.filter((day) => day._id !== action.payload),
      };

    case ITEMS_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
