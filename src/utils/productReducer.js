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

    case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLEPRODUCT_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProducts: action.payload,
      };

    case "SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
