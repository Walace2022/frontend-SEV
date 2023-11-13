import { ButtonStyled } from "./ButtonStyled";

export function Button({ text, path }) {
  return <ButtonStyled to={path}>{text}</ButtonStyled>;
}
