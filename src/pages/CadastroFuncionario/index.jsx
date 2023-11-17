import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../../components/Header";
import { BodyContainer } from "../../GlobalStyled";
import { Footer } from "../../components/Footer";
import {
  ErrorMessage,
  Form,
  FormButton,
  SucessoMessage,
} from "../Login/FormStyled";
import { Input } from "../../components/Input";
import NavBar from "../../components/NavBar";
import { cadFuncionarioService } from "../../services/funcionarioService";
import { FuncionarioSchema } from "../../schemas/funcionarioSchema";

export function CadastroFuncionario() {
  const [error, setError] = useState("");
  const [sucesso, setSucesso] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FuncionarioSchema) });

  async function cadFuncionario(data) {
    try {
      const response = await cadFuncionarioService(data);
      setSucesso(response.data.message);
      reset();
    } catch (err) {
      setError(err.response.data.message);
    }
  }
  return (
    <>
      <Header />
      <NavBar />

      <BodyContainer>
        <Form onSubmit={handleSubmit(cadFuncionario)}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {!error && sucesso && <SucessoMessage>{sucesso}</SucessoMessage>}
          <div>
            <label htmlFor="nome">Nome:</label>
            <Input
              type="text"
              placeholder="Digite o nome do funcionario"
              name="nome"
              register={register}
            />
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="CPF">CPF:</label>
            <Input
              type="text"
              placeholder="Digite o CPF do Funcionario"
              name="CPF"
              register={register}
            />
            {errors.CPF && <ErrorMessage>{errors.CPF.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <Input
              type="password"
              placeholder="Digite a senha do funcionario"
              name="senha"
              register={register}
            />
            {errors.senha && (
              <ErrorMessage>{errors.senha.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="comfirmSenha">Comfirme a Senha:</label>
            <Input
              type="password"
              placeholder="Comfirme a senha do funcionario"
              name="comfirmSenha"
              register={register}
            />
            {errors.comfirmSenha && (
              <ErrorMessage>{errors.comfirmSenha.message}</ErrorMessage>
            )}
          </div>

          <FormButton type="submit">Cadastrar</FormButton>
        </Form>
      </BodyContainer>
      <Footer />
    </>
  );
}
