import React from "react";
import styled from "styled-components";
import Skills from "../components/About/Skills";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

import NotFoundGif from "../images/notfound.gif";

const StyledNotFound = styled.div`
  min-height: 500px;
  width: 95%;
  margin: 0 auto;

  .heading h1 {
    font-size: clamp(3rem, 4.5vw, 5rem);
  }
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const NotFound = () => {
  return (
    <div>
      <Header />
      <StyledNotFound>
        <div className="heading">
          <img src={NotFoundGif} alt="" />
        </div>
      </StyledNotFound>
    </div>
  );
};

export default NotFound;
