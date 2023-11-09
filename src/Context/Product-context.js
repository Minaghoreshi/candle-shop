import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/product-reducer";
import axios from "axios";
const url = "http://localhost:3000/products";

export const ProductContext = createContext();
export const ProductContextProvider = (props) => {
  const [products, productsDispatch] = useReducer(productReducer, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) =>
        productsDispatch({ type: "GET_PRODUCTS", payload: response.data })
      );
  }, []);
  return (
    <ProductContext.Provider value={{ products, productsDispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
