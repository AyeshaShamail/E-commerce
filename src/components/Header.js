import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
// import { useFilterContext } from "../utils/filterContext";

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
  .filter-search {
    width: 50%;
    input {
      padding: 0.6rem 1rem;
      width: 100%;
      max-width: 750px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .filter-search {
      width: 60%;
    }

    input {
      max-width: none;
    }
  }
`;

// NAvlink is used if we don't want to refresh our page
const Header = () => {
  // const {
  //   filters: { text },
  //   updateFilterValue,
  // } = useFilterContext();
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/logo12.png" alt="Logo" width={180} />
      </NavLink>
      {/* <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search Products"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div> */}
      <Navbar />
    </MainHeader>
  );
};

export default Header;
