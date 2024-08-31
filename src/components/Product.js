import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import DiscountPrice from "../Helpers/DiscountPrice";

const Product = ({ curElem }) => {
  const { id, title, images, price, category } = curElem;

  return (
    <NavLink to={`/productDetail/${id}`}>
      <div className="card">
        <figure>
          <img src={images[0]} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
      </div>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{title}</h3>
          <p className="product-data-price">
            MRP:{" "}
            {price > 49 ? (
              <del>
                <FormatPrice price={price} />
              </del>
            ) : (
              <FormatPrice price={price} />
            )}
          </p>
          {price > 49 && (
            <p>
              <b>Deal of the Day:</b> {<DiscountPrice price={price} />}
            </p>
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
