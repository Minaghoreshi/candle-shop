const actionTypes = {
  SET_CURRENT_SELECTED: "SET_CURRENT_SELECTED",
  ADD_TO_SELECTED_PRODUCTS: "ADD_TO_SELECTED_PRODUCTS",
  REMOVE_FROM_SELECTED_PRODUCTS: "REMOVE_FROM_SELECTED_PRODUCTS",
  UPDATE_SELECTED_PRODUCT: "UPDATE_SELECTED_PRODUCT",
};

export const selectedProductReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SELECTED:
      return { ...state, currentSelected: action.payload };
    case actionTypes.ADD_TO_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    case actionTypes.REMOVE_FROM_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case actionTypes.UPDATE_SELECTED_PRODUCT:
      const updatedProducts = state.selectedProducts.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        selectedProducts: updatedProducts,
      };

    default:
      return state;
  }
};
