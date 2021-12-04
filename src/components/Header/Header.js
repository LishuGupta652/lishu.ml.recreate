import React from "react";
import styled from "styled-components";

import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <div>
      <StyledHeader class="header">
        <div class="navbar">
          <h2>lishu gupta</h2>
          <ul>
            <li>blog</li>
            <li>log in</li>
          </ul>
        </div>
        <div class="headerText"></div>
        <div class="headerSidebar"></div>
      </StyledHeader>
    </div>
  );
};

export default Header;
