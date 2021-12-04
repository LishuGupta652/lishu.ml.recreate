import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const StyledHome = styled.div`
  background-color: ${(props) => props.theme.light.background};
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

export default Home;
