import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 95%;
  margin: 0px auto;
  color: ${(props) => props.theme.colors.color};

  h3 {
    padding: 30px 0;
    margin: 50px 0;
    background-color: ${(props) => props.theme.colors.greenTrans};
  }
  h1 {
    font-size: clamp(2rem, 3.5vw, 3rem);
    margin: 30px 0;
  }

  .card {
    width: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.greenTrans};
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .head {
    padding: 10px 0;
  }

  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1f;
    gap: 10px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      "one . ."
      "two three ."
      "four five six"
      ". . .";
    justify-items: center;
  }

  @media (max-width: 720px) {
    .skills {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 20px 14px;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six";
      justify-items: center;
      align-items: center;
    }
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
