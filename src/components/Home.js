import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const Home = () => {
  return <Wrapper className="test">Home</Wrapper>;
};

export default Home;
