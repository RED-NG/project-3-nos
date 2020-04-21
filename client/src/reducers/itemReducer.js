import { v4 as uuidv4 } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    {
      id: uuidv4(),
      name: "Coors Light",
      count: 100,
      threshold: 10,
      sold: 86,
    },
    { id: uuidv4(), name: "Budweister", count: 100, threshold: 10, sold: 80 },
    {
      id: uuidv4(),
      name: "Stella Artois",
      count: 75,
      threshold: 10,
      sold: 34,
    },
    {
      id: uuidv4(),
      name: "Alexander Keiths",
      count: 50,
      threshold: 10,
      sold: 12,
    },
    {
      id: uuidv4(),
      name: "Belgian Moon",
      count: 50,
      threshold: 10,
      sold: 20,
    },
    {
      id: uuidv4(),
      name: "Muskoka",
      count: 50,
      threshold: 10,
      sold: 15,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
}
