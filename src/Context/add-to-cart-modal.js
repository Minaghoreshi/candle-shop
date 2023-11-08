import { createContext, useReducer } from "react";
import { addModalReducer } from "../reducers/add-modal-reducer";
export const AddToCartModalContext = createContext();

export const AddToCartModalProvider = (props) => {
  const [addModalState, addModalDispatch] = useReducer(addModalReducer, {
    isOpen: false,
  });

  return (
    <AddToCartModalContext.Provider value={{ addModalState, addModalDispatch }}>
      {props.children}
    </AddToCartModalContext.Provider>
  );
};
