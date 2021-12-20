import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Corinthia:wght@700&family=Luxurious+Script&family=Montserrat:wght@100;300&family=Poppins:wght@300&family=Roboto:wght@300&display=swap");

:root {
  --background-color: #fafafa;
  --color: #121212;
  --green: #2ecc71;
  --green-o: rgba(49, 235, 49, 0.1);
}

::selection {
  background: var(--green);
  color: #121212;
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

const Container = styled.div``;