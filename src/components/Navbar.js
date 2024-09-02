import {
  CloseOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../utils/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 1.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        margin-right: 2.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    margin-right: 2rem;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 2.2rem !important;

    .cart-total--item {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      background-color: rgb(98 84 243);
      color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -60%;
      left: 66%;
      font-size: 1rem;
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 0.3s linear;

      .navbar-link {
        font-size: 2.2rem;
      }
    }

    .cart-trolley--link {
      position: relative;
      font-size: 3.2rem !important;

      .cart-total--item {
        width: 3.2rem;
        height: 3.2rem;
        font-size: 2rem;
        top: -41%;
        left: 69%;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 0.5rem;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1rem;
  }
`;

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link home-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about"
              className="navbar-link home-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/products"
              className="navbar-link home-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/contact"
              className="navbar-link home-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li> */}

          {isAuthenticated && <p>{user.name}</p>}

          {isAuthenticated ? (
            <li>
              {
                <Button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LOG OUT
                </Button>
              }
            </li>
          ) : (
            <li>
              {<Button onClick={() => loginWithRedirect()}>LOG IN</Button>}
            </li>
          )}

          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <ShoppingCartOutlined />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <MenuOutlined
            name="menu-outlined"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CloseOutlined
            name="menu-outlined"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
