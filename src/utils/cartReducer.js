const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, quantity, product } = action.payload;

    let existingProduct = state.cart.find((curItem) => curItem.id === id);

    if (existingProduct) {
      let uniqueProduct = state.cart.map((curItem) => {
        if ((curItem.id = id)) {
          let newQuantity = curItem.quantity + quantity;
          if (newQuantity >= curItem.max) {
            newQuantity = curItem.max;
          }
          return {
            ...curItem,
            quantity: newQuantity,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: uniqueProduct,
      };
    } else {
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
        cart: [...(state.cart || []), cartProducts],
      };
    }
  }

  if (action.type === "SET_DECREASE") {
    let uniqueProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decreamentQty = curItem.quantity - 1;

        if (decreamentQty <= 1) {
          decreamentQty = 1;
        }

        return {
          ...curItem,
          quantity: decreamentQty,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: uniqueProduct };
  }

  if (action.type === "SET_INCREASE") {
    let uniqueProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let incrementQty = curItem.quantity + 1;

        if (incrementQty >= curItem.max) {
          incrementQty = curItem.max;
        }

        return {
          ...curItem,
          quantity: incrementQty,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: uniqueProduct };
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

  // if (action.type === "TOTAL_CART_ITEM") {
  //   let updatedItemValue = state.cart.reduce((acc, cur) => {
  //     let { quantity } = cur;

  //     acc = acc + quantity;
  //     return acc;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_item: updatedItemValue,
  //   };
  // }

  // if (action.type === "TOTAL_CART_PRICE") {
  //   const discountPercentage = 25;

  //   let total_amount = state.cart.reduce((acc, cur) => {
  //     let { price, quantity } = cur;
  //     const subtotalBeforeDiscount = price * quantity;
  //     const discountedPrice =
  //       price > 99
  //         ? subtotalBeforeDiscount * (1 - discountPercentage / 100)
  //         : subtotalBeforeDiscount;

  //     acc = acc + discountedPrice;

  //     return acc;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_amount,
  //   };
  // }

  if (action.type === "TOTAL_CART_PRICE_ITEM") {
    const discountPercentage = 25;

    let { total_item, total_amount } = state.cart.reduce(
      (acc, cur) => {
        let { price, quantity } = cur;

        acc.total_item += quantity;

        const subtotalBeforeDiscount = price * quantity;
        const discountedPrice =
          price > 99
            ? subtotalBeforeDiscount * (1 - discountPercentage / 100)
            : subtotalBeforeDiscount;

        acc.total_amount += discountedPrice;

        return acc;
      },
      {
        total_item: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_amount,
    };
  }
  return state;
};

export default cartReducer;
