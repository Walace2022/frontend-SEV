import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 2rem;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`;
