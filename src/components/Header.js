import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const MainHeader = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile});
`;

// NAvlink is used if we don't want to refresh our page
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/logo12.png" alt="Logo" width={100} />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
