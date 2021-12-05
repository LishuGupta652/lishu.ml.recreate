import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar"
    "headerSidebar . . . . . . . . . . ."
    "headerSidebar . headerText headerText headerText headerText headerText headerText headerText headerText . ."
    "headerSidebar . headerText headerText headerText headerText headerText headerText headerText headerText . ."
    "headerSidebar . . . . . . . . . . ."
    "headerSidebar . . . . . . . . . . .";

  .pi {
    position: absolute;
    width: 300px;
    top: 120px;
    left: 50px;
    z-index: 0;
    pointer-events: none;
  }
  .pi2 {
    position: absolute;
    width: 300px;
    bottom: -300px;
    right: 50px;
    width: 300px;
    z-index: 0;
    pointer-events: none;
  }
  @media (max-width: 820px) {
    .pi2 {
      display: none;
    }
  }
`;

export const StyledNavbar = styled.nav`
  grid-area: navbar;
  background-color: ${(props) => props.theme.header.nav.background};
  color: ${(props) => props.theme.header.nav.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0 20px;

  h2 {
    transition: 0.2s ease-in-out;
    cursor: pointer;
    z-index: 10;
  }
  h2:hover {
    color: ${(props) => props.theme.colors.green};
  }
  .switch-bar {
    color: ${(props) => props.theme.colors.color};
    font-size: 9px;
  }

  ul {
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    opacity: 0;
  }
  ul li {
    margin-right: 20px;
    font-weight: bold;
    font-size: clamp(0.5rem, 0.8vw, 2rem);
    transition: 0.2s ease-in-out;
  }
  ul li:hover {
    color: ${(props) => props.theme.colors.green};
  }
  @media (max-width: 786px) {
  }
`;

export const HeaderText = styled.div`
  grid-area: headerText;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: ${(props) => props.theme.header.nav.color};
`;
