const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const recommendedData = action.payload.filter((curELem) => {
        return curELem.warrantyInformation === "Lifetime warranty";
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        recommendedProducts: recommendedData,
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
