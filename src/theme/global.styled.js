import styled, { createGlobalStyle, css } from "styled-components";

export const lightTheme = {
  header: {
    nav: {
      background: "#fafafa",
      color: "#121212",
    },
  },
  colors: {
    background: "#fafafa",
    color: "#212121",
    green: "#2ecc71",
    greenTrans: "rgba(46, 204, 112, 0.1)",
    blue: "#30336b",
    footer: "#30336b",
    white: "#fafafa",
    lightBlack: "#838383",
  },
  mobile: "786px",
};

export const darkTheme = {
  header: {
    nav: {
      color: "#fafafa",
      background: "#212121",
    },
  },
  colors: {
    color: "#fafafa",
    background: "#212121",
    green: "#2ecc71",
    greenTrans: "rgba(46, 204, 112, 0.4)",
    blue: "#fafafa",
    footer: "#30336b",
    white: "#fafafa",
    lightBlack: "#838383",
  },
  mobile: "786px",
};

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div``;

export const GlobalStyles = createGlobalStyle`

:root {
  --background-color: #fafafa;
  --color: #121212;
  --green: #2ecc71;
  --green-o: rgba(49, 235, 49, 0.1);
}

::selection {
  background: black;
  color: white;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  scroll-behavior: smooth;
  transition: 0.2s ease-in-out;
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-family: "Corinthia", cursive;
  font-family: "Luxurious Script", cursive;
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Poppins", sans-serif;
}
a {
  text-decoration: none;

  scroll-behavior: smooth;
  transition: 0.2s ease-in-out;
}
ul {
  list-style: none;
}

/* ------------------------------- APP ------------------------ */
/* ------------------------------------------------------------- */
.app {
  max-width: 1400px;
  margin: 0 auto;
  width: 99%;
}
@media only screen and (min-width: 600px) {
}

/* -------------------------------HEADER------------------------ */
/* ------------------------------------------------------------- */
.header {
}

.navbar {
}

.headerText {
}

.headerSidebar {
  grid-area: headerSidebar;
}
.pattern {
}

.animated-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2ecc71;
  z-index: 100;
}

.card {
}

`;
