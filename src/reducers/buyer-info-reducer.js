export const actionTypes = {
  SET_INFO: "SET_INFO",
};
export const buyerInfoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_INFO:
      return action.payload;
    default:
      return state;
  }
};
