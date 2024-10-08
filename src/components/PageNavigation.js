import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 12rem;
    }
  }
`;

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/"> Home </NavLink> /{title}
    </Wrapper>
  );
};

export default PageNavigation;
