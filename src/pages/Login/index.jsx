import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginService } from "../../services/loginService";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { BodyContainer, ErrorMessage, Form, FormButton } from "./FormStyled";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  async function login(data) {
    try {
      const response = await loginService(data);
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  }
  return (
    <>
      <Header />

      <BodyContainer>
        <Form onSubmit={handleSubmit(login)}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <div>
            <label htmlFor="CPF">CPF:</label>
            <Input
              type="CPF"
              placeholder="Digite seu cpf"
              name="CPF"
              register={register}
            />
            {errors.CPF && <ErrorMessage>{errors.CPF.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              name="senha"
              register={register}
            />
            {errors.senha && (
              <ErrorMessage>{errors.senha.message}</ErrorMessage>
            )}
          </div>

          <FormButton type="submit">Entrar</FormButton>
        </Form>
      </BodyContainer>
    </>
  );
}
