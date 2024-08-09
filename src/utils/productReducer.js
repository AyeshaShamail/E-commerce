const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const recommendedData = action.payload.products.filter((product) => {
        return product.rating >= 4.5;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        suggestedProducts: recommendedData,
      };

    case "MY_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
