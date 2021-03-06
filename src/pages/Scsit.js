import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

import { Helmet } from "react-helmet";

// Assets
import dwarfGif from "../images/project/dwarf_main.gif";
const WorkContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    text-transform: uppercase;
    font-size: clamp(2rem, 3.5vw, 4rem);
    font-family: "Luxurious Script", cursive;
    letter-spacing: 5px;
    padding: 30px 0;
  }
  .videoMainWrap {
    margin: 0 auto;
    width: 100%;
    padding: 30px 0;
  }
  .videoMain {
    width: 100%;
    magin: 0 auto;
    border-radius: 20px;
  }
`;

const Scsit = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Scsit | Lishu gupta</title>
        <meta name="title" content="Dwarf | Lishu Gupta" />
        <meta name="author" content="Lishu Gupta" />
      </Helmet>
      <Header />
      <WorkContainer>
        <a href="http://www.scs.dauniv.ac.in/" target="_blank">
          <h1>Dwarf.co.in</h1>
          <div className="videoMainWrap">
            <img className="videoMain" src={dwarfGif} alt="" />
          </div>
        </a>
      </WorkContainer>
    </div>
  );
};

export default Scsit;
