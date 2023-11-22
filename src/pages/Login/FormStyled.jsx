import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#e3e3e3, #c6c6ca);
  padding: 2rem;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0 0 1px #272e5fa7;

  &:hover {
    box-shadow: 0 0 3px #272e5fa7;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      margin-bottom: 0.3rem;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin: 0.3rem 0;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #ff2c2cb3;
  color: #fcdfdf;
`;
export const SucessoMessage = styled.p`
  margin: 0.3rem 0;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #01fa4cd5;
  color: #024b10;
`;

export const FormButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 4px;
  border: 1px solid #272e5f;
  background: linear-gradient(#e3e3e3, #c6c6ca);
  align-self: center;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(#c6c6ca, #e3e3e3);
  }
`;

export const SelectInput = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #272e5f;
  background-color: #e3e3e3;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px #272e5fa7;
    background-color: #fff;
  }
`;
