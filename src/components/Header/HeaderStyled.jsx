import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(#e3e3e3, #c6c6ca);
  div {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 50px;

    img {
      width: 50px;
      padding: 10px;
    }
    h1 {
      margin: 0 auto;
      font-size: 2rem;
    }
    @media (max-width: 1024px) {
      h1 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 425px) {
      h1 {
        font-size: 1rem;
      }
    }
  }
`;
