import { createContext, useReducer } from "react";
import { checkoutModalReducer } from "../reducers/checkout-reducer";
export const checkoutModalContext = createContext();

export const CheckoutModalProvider = (props) => {
  const [checkoutModalState, checkoutDispatch] = useReducer(
    checkoutModalReducer,
    { isOpen: false }
  );
  return (
    <checkoutModalContext.Provider
      value={(checkoutModalState, checkoutDispatch)}
    >
      {props.children}
    </checkoutModalContext.Provider>
  );
};
