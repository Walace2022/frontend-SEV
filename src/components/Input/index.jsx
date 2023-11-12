import { InputStyled } from "./InputStyled";

export function Input({ type, placeholder, name, register }) {
  return (
    <InputStyled
      id={name}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}
