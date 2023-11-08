import { createContext, useReducer } from "react";
import { checkoutModalReducer } from "../reducers/checkout-reducer";
export const CheckoutModalContext = createContext();

export const CheckoutModalProvider = (props) => {
  const [checkoutModalState, checkoutDispatch] = useReducer(
    checkoutModalReducer,
    { isOpen: false }
  );
  return (
    <CheckoutModalContext.Provider
      value={{ checkoutModalState, checkoutDispatch }}
    >
      {props.children}
    </CheckoutModalContext.Provider>
  );
};
