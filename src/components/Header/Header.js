import React from "react";
import styled from "styled-components";

import { StyledHeader } from "./Header.styled";

const Navbar = styled.nav`
  grid-area: navbar;
  background-color: ${(props) => props.theme.header.nav.background};
  color: ${(props) => props.theme.header.nav.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <div>
      <StyledHeader class="header">
        <Navbar class="navbar">
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
