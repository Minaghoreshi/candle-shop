import { createContext, useReducer } from "react";
import { buyerInfoReducer } from "../reducers/buyer-info-reducer";
export const BuyerInfoContext = createContext();
export const BuyerInfoProvider = (props) => {
  const [buyerInfo, buyerInfoDispatch] = useReducer(buyerInfoReducer, null);

  return (
    <BuyerInfoContext.Provider valu={{ buyerInfo, buyerInfoDispatch }}>
      {props.children}
    </BuyerInfoContext.Provider>
  );
};
