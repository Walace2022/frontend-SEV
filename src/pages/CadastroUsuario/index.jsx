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
import { UsuarioSchema } from "../../schemas/UsuarioSchema";
import { cadUsuarioService } from "../../services/usuarioService";

export function CadastroUsuario() {
  const [error, setError] = useState("");
  const [sucesso, setSucesso] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UsuarioSchema) });

  async function cadUsuario(data) {
    try {
      const response = await cadUsuarioService(data);
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
        <Form onSubmit={handleSubmit(cadUsuario)}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {!error && sucesso && <SucessoMessage>{sucesso}</SucessoMessage>}
          <div>
            <label htmlFor="nome">Nome:</label>
            <Input
              type="text"
              placeholder="Digite o nome do usuario"
              name="nome"
              register={register}
            />
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="CPF">CPF:</label>
            <Input
              type="text"
              placeholder="Digite o CPF do usuario"
              name="CPF"
              register={register}
            />
            {errors.CPF && <ErrorMessage>{errors.CPF.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="endereco">Endereço:</label>
            <Input
              type="text"
              placeholder="Digite o endereco do usuario"
              name="endereco"
              register={register}
            />
            {errors.endereco && (
              <ErrorMessage>{errors.endereco.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="telefone">Telefone:</label>
            <Input
              type="tel"
              placeholder="Digite o telefone do usuario"
              name="telefone"
              register={register}
            />
            {errors.telefone && (
              <ErrorMessage>{errors.telefone.message}</ErrorMessage>
            )}
          </div>

          <FormButton type="submit">Cadastrar</FormButton>
        </Form>
      </BodyContainer>
      <Footer />
    </>
  );
}
