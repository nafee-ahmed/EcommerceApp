export const CartReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
        counter: action.payload?.length,
        loading: false,
      };
    default:
      throw Error("Cart Reducer Error");
  }
};
