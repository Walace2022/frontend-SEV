import styled from "styled-components";

export const TextCardStyled = styled.section`
  padding: 30px;
  border-radius: 4px;
  background: linear-gradient(#e3e3e3, #c6c6ca);

  &:hover {
    box-shadow: 0 0 3px #272e5fa7;
  }

  p + p {
    margin-top: 0.5rem;
  }
`;
