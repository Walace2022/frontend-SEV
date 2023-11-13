import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonStyled = styled(Link)`
  display: block;
  padding: 2.5rem;
  text-align: center;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #272e5f;
  background: linear-gradient(#e3e3e3, #c6c6ca);
  align-self: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #0d1238;

  &:hover {
    background: linear-gradient(#c6c6ca, #e3e3e3);
  }
`;
