import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../utils/cartReducer";

const CartContext = createContext();

const getCartDataLocal = () => {
  const localCartData = localStorage.getItem("shamayaCart");
  return localCartData ? JSON.parse(localCartData) : [];
};

const initialState = {
  cart: getCartDataLocal(),
  total_item: 0,
  total_amount: 0,
  shipping_charges: "4900",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, quantity, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, quantity, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    // dispatch({ type: "TOTAL_CART_ITEM" });
    // dispatch({ type: "TOTAL_CART_PRICE" });

    dispatch({ type: "TOTAL_CART_PRICE_ITEM" });
    localStorage.setItem("shamayaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
