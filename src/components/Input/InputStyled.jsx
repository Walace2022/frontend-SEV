import styled from "styled-components";

export const InputStyled = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #272e5f;
  background-color: #e3e3e3;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px #272e5fa7;
    background-color: #fff;
  }
`;
