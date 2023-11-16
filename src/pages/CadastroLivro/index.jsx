import Cookies from "js-cookie";
import { cadLivroService } from "../../services/livrosService";
import { LivroSchema } from "../../schemas/LivroSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../../components/Header";
import { BodyContainer } from "../../GlobalStyled";
import { Footer } from "../../components/Footer";
import { ErrorMessage, Form, FormButton } from "../Login/FormStyled";
import { Input } from "../../components/Input";

export function CadastroLivro() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LivroSchema) });

  async function cadLivro(data) {
    try {
      const response = await cadLivroService(data);
      console.log("oi");
      console.log(response);
    } catch (err) {
      console.log("oi erro");

      setError(err.response.data.message);
    }
  }
  return (
    <>
      <Header />

      <BodyContainer>
        <Form onSubmit={handleSubmit(cadLivro)}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
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

          <FormButton type="submit">Cadastrar</FormButton>
        </Form>
      </BodyContainer>
      <Footer />
    </>
  );
}
