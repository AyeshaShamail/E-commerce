import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  .container {
    padding: 6rem 0;
    text-align: center;

    h2 {
      font-size: 8rem;
    }

    h3 {
      font-size: 4rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you're looking for doesn't exist. Click on the button below
            to return to home page.
          </p>

          <Button style={{ marginTop: "1.5rem" }}>
            <NavLink to="/">Home</NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
