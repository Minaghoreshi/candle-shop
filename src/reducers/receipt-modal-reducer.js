export const actionTypes = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};
export const receiptModalReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, isOpen: true, productId: action.payload };
    case actionTypes.CLOSE_MODAL:
      return { ...state, isOpen: false, productId: null };

    default:
      return state;
  }
};
