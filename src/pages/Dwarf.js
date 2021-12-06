import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

const WorkContainer = styled.div`
  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    text-transform: uppercase;
    font-size: clamp(2rem, 3.5vw, 4rem);
  }
`;

const Dwarf = () => {
  return (
    <div>
      <Header />
      <WorkContainer>
        <a href="https://www.dwarf.co.in" target="_blank">
          <h1>Dwarf.co.in</h1>
        </a>
        9952
      </WorkContainer>
    </div>
  );
};

export default Dwarf;
