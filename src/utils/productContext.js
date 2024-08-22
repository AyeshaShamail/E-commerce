import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./productReducer";

const AppContext = createContext();

const API = "https://dummyjson.com/products";
// const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  suggestedProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data?.products;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "MY_ERROR" });
      console.error("Error fetching products:", error);
    }
  };

  const getProductDetails = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getProductDetails }}>
      {children}
    </AppContext.Provider>
  );
};

//Custom Hooks
const useProductsContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductsContext };
