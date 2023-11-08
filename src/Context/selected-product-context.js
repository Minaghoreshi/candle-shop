import { createContext, useReducer } from "react";
import { selectedProductReducer } from "../reducers/selected-product-reducer";
export const SelectedProductContext = createContext();
export const SelectedProductContextProvider = (props) => {
  const [selected, selectedDispatch] = useReducer(selectedProductReducer, []);
  return (
    <SelectedProductContext.Provider value={{ selected, selectedDispatch }}>
      {props.children}
    </SelectedProductContext.Provider>
  );
};
