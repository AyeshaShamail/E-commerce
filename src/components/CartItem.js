import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "../Helpers/CartAmountToggle";
import { useCartContext } from "../utils/cartContext";

const CartItem = ({ id, title, images, price, quantity }) => {
  const { removeItem } = useCartContext();
  const setDecrease = () => {
    // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    // quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={images} alt={id} />
          </figure>
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <CartAmountToggle
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * quantity} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
