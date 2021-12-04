import React from "react";
import { StyledHeader, Navbar, HeaderText } from "./Header.styled";
import patternImg from "../../images/pattern.svg";
const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Navbar>
          <h2 title="lishu.ml">lishu gupta</h2>
          <ul>
            <li>blog</li>
            <li>PROJECTS</li>
            <li>log in</li>
          </ul>
        </Navbar>
        <HeaderText>
          <h1 title="lishu gupta">Web and Android Developer</h1>
        </HeaderText>
        <div class="headerSidebar"></div>
        <img src={patternImg} className="pi" />
      </StyledHeader>
    </div>
  );
};

export default Header;
