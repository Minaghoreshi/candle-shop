import { createContext, useEffect, useReducer } from "react";
import { selectedProductReducer } from "../reducers/selected-product-reducer";

export const SelectedProductContext = createContext();

export const SelectedProductContextProvider = (props) => {
  // Check if there is any data in local storage for selectedProducts
  const initialSelectedProducts =
    JSON.parse(localStorage.getItem("selectedProducts")) || [];

  const [selected, selectedDispatch] = useReducer(selectedProductReducer, {
    currentSelected: null,
    selectedProducts: initialSelectedProducts,
  });

  // Update local storage whenever selected products change
  useEffect(() => {
    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(selected.selectedProducts)
    );
  }, [selected.selectedProducts]);

  return (
    <SelectedProductContext.Provider value={{ selected, selectedDispatch }}>
      {props.children}
    </SelectedProductContext.Provider>
  );
};
