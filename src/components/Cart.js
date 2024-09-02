import React from "react";
import styled from "styled-components";
import { useCartContext } from "../utils/cartContext";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import { useAuth0 } from "@auth0/auth0-react";
const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .empty-cart-message {
    font-size: 1.8rem;
    color: rgb(98 84 243);
    margin-top: 3rem;
    margin-bottom: 3rem;
    transition: transform 0.3s ease-in-out;
  }

  .shipping-message {
    font-size: 1.6rem;
    color: #e74c3c;
    margin: 2rem 0;
    text-align: center;
  }

  .additional-amount {
    font-size: 1.6rem;
    color: #2c3e50;
    margin: 2rem 0;
    text-align: center;
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_charges } = useCartContext();
  const { isAuthenticated, user } = useAuth0();

  const adjustedShippingCharges =
    total_amount > 299 ? 0 : shipping_charges / 100;
  const orderTotal = total_amount + adjustedShippingCharges;

  const amountNeeded = 299 - total_amount;

  if (!cart || cart.length === 0) {
    return (
      <Wrapper>
        <div className="container">
          <p className="empty-cart-message">
            No items in your cart. Why not explore our collection?
          </p>

          <NavLink to="/products">
            <Button>Continue Shopping</Button>
          </NavLink>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        {isAuthenticated && (
          <div className="cart-user--profile">
            <img src={user.profile} alt={user.name} />
            <h3 className="cart-user--name">{user.name}</h3>
          </div>
        )}
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />

        {total_amount <= 299 && (
          <>
            <p className="shipping-message">
              Your cart value is less than 299. Shipping charges will be added.
            </p>
            <p className="additional-amount">
              Add <FormatPrice price={amountNeeded} /> more to your cart to
              avoid shipping charges!
            </p>
          </>
        )}

        <div className="cart-two-button">
          <NavLink to="/products">
            <Button>Continue Shopping</Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Sub Total : </p>
              <p>
                <FormatPrice price={total_amount} />
              </p>
            </div>
            <div>
              <p>Shipping Charges :</p>
              <p>
                <FormatPrice price={adjustedShippingCharges} />
              </p>
            </div>
            <hr />

            <div>
              <p>Order Total :</p>
              <p>
                <FormatPrice price={orderTotal} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
