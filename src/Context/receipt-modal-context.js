import { createContext, useReducer } from "react";
import { receiptModalReducer } from "../reducers/receipt-modal-reducer";

export const ReceiptModalContext = createContext();
export const ReceiptModalProvider = (props) => {
  const [receiptModalState, receiptModalDispatch] = useReducer(
    receiptModalReducer,
    { isOpen: false }
  );

  return (
    <ReceiptModalContext.Provider
      value={{ receiptModalState, receiptModalDispatch }}
    >
      {props.children}
    </ReceiptModalContext.Provider>
  );
};
