const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, quantity, product } = action.payload;

    let cartProducts = {
      id: id,
      title: product.title,
      quantity,
      images: product.images[0],
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...(state.cart || []), cartProducts], // Ensure state.cart is an array
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
