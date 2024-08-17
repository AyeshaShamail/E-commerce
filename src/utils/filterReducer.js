const filterReducer = (state, action) => {
  console.log("Action Payload:", action.payload);
  switch (action.type) {
    case "SHOW_FILTER_PRODUCTS":
      const products = action.payload?.products || [];
      return {
        ...state,
        filter_products: [...products],
        all_products: [...products],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    default:
      return state;
  }
};

export default filterReducer;
