import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    font-family:  Arial;
    box-sizing: border-box;
  }

  html {
    width: auto;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #c3daec;
  }
`;

export const BodyContainer = styled.main`
  min-height: calc(100vh - 100px);
  display: grid;
  justify-content: center;
  place-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;
