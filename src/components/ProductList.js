import React from "react";
import { useFilterContext } from "../utils/filterContext";
import ListView from "./ListView";
import GridView from "./GridView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  console.log("filter_products ", filter_products);
  console.log("grid_view ", grid_view);
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
