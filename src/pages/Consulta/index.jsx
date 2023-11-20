import { BodyContainer } from "../../GlobalStyled";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Tabelas } from "../../components/Table";

export function Consulta() {
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
        <Tabelas />
      </BodyContainer>

      <Footer />
    </>
  );
}
