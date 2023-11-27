import { BodyContainer } from "../../GlobalStyled";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Tabelas } from "../../components/Table";
import { DescriptionText } from "./ConsultaStyled";

export function Consulta() {
  return (
    <>
      <Header />
      <NavBar />
      <BodyContainer>
        <DescriptionText>
          Está é nossa área de consultas, aqui você pode verificar os usuários e
          os livros cadastrados. Aqui você também pode atualizar as informações
          dos cadastros já existentes.
        </DescriptionText>
        <Tabelas />
      </BodyContainer>

      <Footer />
    </>
  );
}
