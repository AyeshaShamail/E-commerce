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
  isSingleLoading: false,
  singleProducts: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      // console.log("products", products);
      // console.log("Response:", res);
    } catch (error) {
      dispatch({ type: "MY_ERROR" });
      console.error("Error fetching products:", error);
    }
  };

  // const getProductDetails = async (url) => {
  //   dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
  //   try {
  //     const res = await axios.get(url);
  //     const singleProducts = await res.data.products;
  //     dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: singleProducts });
  //     // console.log("singleProducts", singleProducts);
  //   } catch (error) {
  //     dispatch({ type: "SINGLE_PRODUCT_ERROR" });
  //     console.error("Error fetching product details:", error);
  //   }
  // };

  const getProductDetails = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data; // Assuming data is the product object itself
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
