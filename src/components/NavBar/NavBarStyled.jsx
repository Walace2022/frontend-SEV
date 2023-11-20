import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  div {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: end;
      margin:0;

      h3 {
        font-size: 1rem;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-weight: 700;

        &:hover {
          color: #8b8b8b;
        }
      }
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    a {
      display: block;
      text-decoration: none;
      padding: 1rem 2rem;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: 700;
      color: #000;

      &:hover {
        color: #2c2c2c;
      }
    }
  }

  hr {
    width: 100%;
    border: 5px solid #c6c6ca;
  }
`;
