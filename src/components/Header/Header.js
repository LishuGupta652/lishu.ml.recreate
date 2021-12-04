import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  height: 100vh;
  grid-auto-flow: row;
  grid-template-areas:
    "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar"
    "headerSidebar . . . . . . . . . . ."
    "headerSidebar . headerText headerText headerText headerText headerText headerText headerText headerText . ."
    "headerSidebar . headerText headerText headerText headerText headerText headerText headerText headerText . ."
    "headerSidebar . . . . . . . . . . ."
    "headerSidebar . . . . . . . . . . .";
`;

const Header = () => {
  return (
    <div>
      <div class="header">
        <div class="navbar">
          <h2>lishu gupta</h2>
          <ul>
            <li>blog</li>
            <li>log in</li>
          </ul>
        </div>
        <div class="headerText"></div>
        <div class="headerSidebar"></div>
      </div>
    </div>
  );
};

export default Header;
