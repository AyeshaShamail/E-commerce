import React from "react";
import FormatPrice from "../Helpers/FormatPrice";

const DiscountPrice = ({ price }) => {
  const discountPercentage = 25;
  const discountedPrice = price - price * (discountPercentage / 100);

  // const discountedPrice =
  // price > 49 ? price - price * (discountPercentage / 100) : price;

  return <FormatPrice price={discountedPrice} />;
};

export default DiscountPrice;
