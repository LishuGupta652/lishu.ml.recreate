import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 95%;
  margin: 100px auto;

  h1 {
    font-size: clamp(2rem, 3.5vw, 3rem);
  }

  .card {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    background-color: #2ecc7060;
  }

  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      "one . ."
      "two three ."
      "four five six";
    justify-items: center;
    align-items: center;
  }

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }

  .four {
    grid-area: four;
  }

  .five {
    grid-area: five;
  }

  .six {
    grid-area: six;
  }
`;
