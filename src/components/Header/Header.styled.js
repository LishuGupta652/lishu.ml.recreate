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
