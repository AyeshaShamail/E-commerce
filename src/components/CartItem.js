import { FaTrash } from "react-icons/fa";
import DiscountPrice from "../Helpers/DiscountPrice";
import CartAmountToggle from "../Helpers/CartAmountToggle";
import { useCartContext } from "../utils/cartContext";
import FormatPrice from "../Helpers/FormatPrice";

const CartItem = ({ id, title, images, price, quantity }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  const subtotalBeforeDiscount = price * quantity;

  const discountPercentage = 25;
  const discountedSubtotal =
    price > 49
      ? subtotalBeforeDiscount * (1 - discountPercentage / 100)
      : subtotalBeforeDiscount;

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
        {price > 49 ? (
          <p>
            <DiscountPrice price={price} />
          </p>
        ) : (
          <p>{<FormatPrice price={price} />}</p>
        )}
      </div>

      <CartAmountToggle
        quantity={quantity}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      <div className="cart-hide">
        {price > 49 ? (
          <p>
            <FormatPrice price={discountedSubtotal} />
          </p>
        ) : (
          <p>
            <FormatPrice price={subtotalBeforeDiscount} />
          </p>
        )}
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
