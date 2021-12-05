import styled from "styled-components";

export const StyledWork = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 100px;
  color: ${(props) => props.theme.colors.blue};

  a:link {
    color: ${(props) => props.theme.colors.blue};
    background-color: transparent;
    text-decoration: none;
  }
  a:visited {
    color: ${(props) => props.theme.colors.blue};
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.colors.green};
    background-color: transparent;
    text-decoration: none;
  }
  a:active {
    color: ${(props) => props.theme.colors.blue};
    background-color: transparent;
    text-decoration: underline;
  }

  h2 {
    letter-spacing: 10px;
    text-transform: uppercase;
    padding: 30px;
    font-size: clamp(1rem, 3.5vw, 2.5rem);
  }
`;

export const FlexContainer = styled.div`
  padding: 30px 0;
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: normal;
    align-items: stretch;
    align-content: stretch;
  }

  .flex-items:nth-child(1) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    width: 60%;
  }
  .item01 img {
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
  .item01 video {
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }

  .flex-items:nth-child(2) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
  }
  .item02 {
  }

  @media (max-width: 820px) {
    .flex-container {
      flex-direction: row;
    }

    .flex-items:nth-child(1) {
      width: 100%;
    }
    .item01 img {
    }

    .flex-items:nth-child(2) {
      width: 100%;
    }
    .item02 {
    }
  }
  .card {
    margin: 10px 30px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.greenTrans};
    border-radius: 10px;
  }
  .card .head {
    margin: 10px 0;
    text-align: center;
  }
  .card .body {
    text-align: justify;
  }
`;
