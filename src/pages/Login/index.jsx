import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginService } from "../../services/loginService";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { BodyContainer, ErrorMessage, Form, FormButton } from "./FormStyled";
import { useContext, useEffect, useState } from "react";
import { FuncionarioContext } from "../../Context/FuncionarioContext";
import { funcionarioLogado } from "../../services/funcionarioService";

export function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { setFuncionario } = useContext(FuncionarioContext);

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, []);

  async function login(data) {
    try {
      const response = await loginService(data);
      Cookies.set("token", response.data.token);
      const logado = await funcionarioLogado();
      setFuncionario(logado.data);
      navigate("/");
    } catch (err) {
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
