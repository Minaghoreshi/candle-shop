import axios from "axios";
import { createContext } from "react";
const url = "http://localhost:3000/products";
const actionTypes = {
  GET_PRODUCTS: "GET_PRODUCTS",
  UPDATE_PRODUCTS: "UPDATE_PRODUCTS",
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.payload;

    default:
      break;
  }
};
