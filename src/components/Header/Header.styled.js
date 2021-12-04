import styled from "styled-components";

export const StyledHeader = styled.div`
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

export const Navbar = styled.nav`
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
    color: ${(props) => props.theme.colors.green};
  }
  & h2:hover {
    color: ${(props) => props.theme.colors.green};
  }
  @media (max-width: 786px) {
    background-color: green;
  }
`;
