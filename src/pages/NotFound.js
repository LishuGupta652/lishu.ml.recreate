import React from "react";
import { Link } from "react-router-dom";
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
  h3 {
    color: ${(props) => props.theme.colors.blue};
    margin: 0 auto;
    font-size: clamp(2rem, 3.5vw, 3rem);
    text-align: center;
    padding: 50px;
    font-family: "Luxurious Script", cursive;

    span {
      color: green;
    }
  }
`;

const NotFound = () => {
  return (
    <div>
      <Header />
      <StyledNotFound>
        <div className="heading">
          <Link to="/">
            <h3>
              Return to home page <span>click here</span>
            </h3>
          </Link>
          <img src={NotFoundGif} alt="" />
        </div>
      </StyledNotFound>
    </div>
  );
};

export default NotFound;
