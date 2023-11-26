import {
  cadLivroService,
  updateLivroService,
} from "../../services/livrosService";
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
import { useNavigate, useParams } from "react-router-dom";
import { AtualizaLivroSchema } from "../../schemas/atualizaLivroSchema";

export function AtualizaLivro() {
  const [error, setError] = useState("");
  const [sucesso, setSucesso] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AtualizaLivroSchema) });

  const navigate = useNavigate();

  const { id } = useParams();

  async function updateLivro(data) {
    try {
      const response = await updateLivroService(data, id);
      setSucesso(response.data.message);
      setError(null);
      reset();
      setTimeout(() => navigate("/consulta"), 2000);
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
        <Form onSubmit={handleSubmit(updateLivro)}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {sucesso && <SucessoMessage>{sucesso}</SucessoMessage>}
          <div>
            <label htmlFor="nome">Titulo:</label>
            <Input
              type="text"
              placeholder="Digite o titulo do livro"
              name="nome"
              register={register}
            />
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor="edicao">Edição:</label>
            <Input
              type="text"
              placeholder="Digite a edicao do livro"
              name="edicao"
              register={register}
            />
            {errors.edicao && (
              <ErrorMessage>{errors.edicao.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="autor">Autor:</label>
            <Input
              type="text"
              placeholder="Digite o autor do livro"
              name="autor"
              register={register}
            />
            {errors.autor && (
              <ErrorMessage>{errors.autor.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="ano">Ano:</label>
            <Input
              type="number"
              placeholder="Digite o ano do livro"
              name="ano"
              register={register}
            />
            {errors.ano && <ErrorMessage>{errors.ano.message}</ErrorMessage>}
          </div>

          <FormButton type="submit">Atualizar</FormButton>
        </Form>
      </BodyContainer>
      <Footer />
    </>
  );
}
