import styled from "styled-components";
import { motion } from "framer-motion";
export const StyledHeader = styled(motion.div)`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

  border-radius: 20px;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ccab7f",endColorstr="#dde284",GradientType=1);
  grid-template-areas:
    "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar"
    ". . . . . . . . . . . ."
    ". . headerText headerText headerText headerText headerText headerText headerText headerText . ."
    ". . headerText headerText headerText headerText headerText headerText headerText headerText . ."
    ". . . . . . . . . . . ."
    ". . . . . . . . . hs hs hs ";

  a:link {
    color: ${(props) => props.theme.colors.color};
    background-color: transparent;
    text-decoration: none;
  }
  a:visited {
    color: ${(props) => props.theme.colors.color};
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.colors.green};
    background-color: transparent;
    text-decoration: none;
  }
  a:active {
    color: ${(props) => props.theme.colors.color};
    background-color: transparent;
    text-decoration: underline;
  }

  @media (max-width: 720px) {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 80px 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar"
      ". . . . . . . . . . . ."
      " . headerText headerText headerText headerText headerText headerText headerText headerText  . . ."
      " . headerText headerText headerText headerText headerText headerText headerText headerText  . . ."
      ". . . . . . . . . . . ."
      " . . . . . . .  hs hs hs  . .";
  }

  .headerSidebar {
    grid-area: hs;
  }
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

export const StyledNavbar = styled(motion.nav)`
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
    font-size: clamp(1rem, 1.2vw, 2rem);
  }
  h2:hover {
    color: ${(props) => props.theme.colors.green};
  }
  .switch-bar {
    color: ${(props) => props.theme.colors.color};
    font-size: 9px;
  }

  .switch-icon {
    cursor: pointer;
    

  }
  .icon {
    width: 28px;
    height: 28px;
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
    font-size: clamp(0.8rem, 1vw, 2rem);
    transition: 0.2s ease-in-out;
  }
  ul li:hover {
    color: ${(props) => props.theme.colors.green};
  }
`;

export const HeaderText = styled.div`
  grid-area: headerText;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: ${(props) => props.theme.colors.blue};
`;
export const HeaderSideBar = styled.div`
  grid-area: hs;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: ${(props) => props.theme.colors.blue};

  .social {
    display: flex;
  }
  .icon-container {
    margin-right: 20px;
    cursor: poiner;
  }
  .icon {
    width: 28px;
    height: 28px;
    color: ${(props) => props.theme.colors.color};
  }
`;
