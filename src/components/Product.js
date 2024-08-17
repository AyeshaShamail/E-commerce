import { NavLink, useParams } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = ({ curElem }) => {
  console.log("curElem", curElem);

  const { id } = useParams();

  const { title, images, price, category } = curElem;

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
          <p className="card-data--price">{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
