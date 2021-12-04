import React from "react";
import { StyledHeader, Navbar } from "./Header.styled";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Navbar>
          <h2>lishu gupta</h2>
          <ul>
            <li>blog</li>
            <li>log in</li>
          </ul>
        </Navbar>
        <div class="headerText"></div>
        <div class="headerSidebar"></div>
      </StyledHeader>
    </div>
  );
};

export default Header;
