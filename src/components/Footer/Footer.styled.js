import styled from "styled-components";

export const StyledFooter = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.footer};
  color: ${(props) => props.theme.colors.white};
  height: 100px;
  .f-container {
    max-width: 1300px;
    margin: 0 auto;
  }
  .flex-footer {
    display: flex;
    height: 100px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .f01 {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }

  .f02 {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }

  .social {
    display: flex;
  }

  .social img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: red;
    margin-right: 20px;
  }
  .social svg path {
    fill: red !important;
  }
`;
