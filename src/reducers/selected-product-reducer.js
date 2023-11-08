const actionTypes = {
  ADD_SELECTED_PRODUCT: "ADD_SELECTED_PRODUCT",
  REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
};
export const selectedProductReducer = (state, action) => {
  switch (actionTypes.type) {
    case actionTypes.ADD_SELECTED_PRODUCT:
      return [...state, action.payload];
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return action.payload;

    default:
      break;
  }
};
