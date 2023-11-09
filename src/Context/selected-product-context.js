import { createContext, useEffect, useReducer } from "react";
import { selectedProductReducer } from "../reducers/selected-product-reducer";
import axios from "axios";
export const SelectedProductContext = createContext();
export const SelectedProductContextProvider = (props) => {
  const [selected, selectedDispatch] = useReducer(selectedProductReducer, {
    currentSelected: null, // The currently selected product
    selectedProducts: [], // An array to store previously selected products
  });

  return (
    <SelectedProductContext.Provider value={{ selected, selectedDispatch }}>
      {props.children}
    </SelectedProductContext.Provider>
  );
};
