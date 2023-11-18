import { useForm } from "react-hook-form";
import { BodyContainer } from "../../GlobalStyled";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import NavBar from "../../components/NavBar";
import { zodResolver } from "@hookform/resolvers/zod";
import { TableTest } from "../../components/Table";

export function Consulta() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver() });

  return (
    <>
      <Header />
      <NavBar />
      <BodyContainer>
        <p>
          Está é nossa área de consultas, aqui você pode verificar os usuários e
          os livros cadastrados, além dos empréstimos que foram realizados e/ou
          estão com a devolução pendente. Aqui você também pode atualizar as
          informações dos cadastros já existentes.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="O que você procura?"
            name="search"
            register={register}
          />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <TableTest />
      </BodyContainer>

      <Footer />
    </>
  );
}
