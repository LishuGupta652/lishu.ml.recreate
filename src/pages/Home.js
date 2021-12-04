import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const StyledHome = styled.div`
  background-color: green;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

export default Home;
