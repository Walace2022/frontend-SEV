import { useEffect, useState } from "react";
import { BodyContainer } from "../../GlobalStyled";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import NavBar from "../../components/NavBar";

import {
  ErrorMessage,
  Form,
  FormButton,
  SelectInput,
} from "../Login/FormStyled";
import { useForm } from "react-hook-form";
import { getLivrosService } from "../../services/livrosService";
import { getUsuariosService } from "../../services/usuarioService";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmprestimoSchema } from "../../schemas/emprestimoSchema";

export function NovoEmprestimo() {
  const [usuarios, setUsuarios] = useState(null);
  const [livros, setLivros] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(EmprestimoSchema) });

  const getUsuarios = async () => {
    const res = await getUsuariosService();
    setUsuarios(res.data);
    console.log(usuarios);
  };
  const getLivros = async () => {
    const res = await getLivrosService();
    setLivros(res.data);
    console.log(livros);
  };

  useEffect(() => {
    getUsuarios();
    getLivros();
  }, []);
  const options = [
    {
      name: "ola",
      value: "1",
    },
  ];
  const emprestimo = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <NavBar />
      <BodyContainer>
        <Form onSubmit={handleSubmit(emprestimo)}>
          <div>
            <label htmlFor="livro">Livros:</label>
            <SelectInput id="livro" {...register("livro")}>
              <option value="">--</option>
              {livros &&
                livros.map((item) => (
                  <option value={item._id}>{item.nome}</option>
                ))}
            </SelectInput>
            {errors.livro && (
              <ErrorMessage>{errors.livro.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="CPF">Usuario:</label>
            <SelectInput id="CPF" {...register("CPF")}>
              <option value="">--</option>
              {usuarios &&
                usuarios.map((item) => (
                  <option value={item.CPF}>{item.nome}</option>
                ))}
            </SelectInput>
            {errors.CPF && <ErrorMessage>{errors.CPF.message}</ErrorMessage>}
          </div>
          <FormButton type="submit">Emprestar</FormButton>
        </Form>
      </BodyContainer>
      <Footer />
    </>
  );
}
