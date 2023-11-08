export const actionTypes = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};
export const checkoutModalReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { isOpen: true };
    case actionTypes.CLOSE_MODAL:
      return { isOpen: false };

    default:
      return state;
  }
};
