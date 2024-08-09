import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./productReducer";

const AppContext = createContext();

const API = "https://dummyjson.com/products";
// const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  suggestedProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      // console.log(products);
      // console.log("Response:", res);
    } catch (error) {
      dispatch({ type: "MY_ERROR" });
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//Custom Hooks
const useProductsContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContext };
