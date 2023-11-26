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
import { updateUsuarioService } from "../../services/usuarioService";
import { useNavigate, useParams } from "react-router-dom";
import { AtualizaUsuarioSchema } from "../../schemas/atualizaUsuarioSchema";

export function AtualizaUsuario() {
  const [error, setError] = useState("");
  const [sucesso, setSucesso] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AtualizaUsuarioSchema) });
  const navigate = useNavigate();

  const { id } = useParams();

  async function updateUsuario(data) {
    try {
      const response = await updateUsuarioService(data, id);
      setSucesso(response.data.message);
      setError(null);
      setTimeout(() => navigate("/consulta"), 2000);
      reset();
    } catch (err) {
      setError(err.response.data.message);
      setSucesso(null);
    }
  }
  return (
    <>
      <Header />
      <NavBar />

      <BodyContainer>
        <Form onSubmit={handleSubmit(updateUsuario)}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {sucesso && <SucessoMessage>{sucesso}</SucessoMessage>}
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

          <FormButton type="submit">Atualizar</FormButton>
        </Form>
      </BodyContainer>
      <Footer />
    </>
  );
}
