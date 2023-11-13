import { BodyContainer } from "../../GlobalStyled";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import NavBar from "../../components/NavBar";
import { TextCardStyled } from "../../components/TextCard/TextCardStyled";
import { CadastroContainer } from "./CadastroStyled";

export function Cadastro() {
  return (
    <>
      <Header />
      <NavBar />
      <BodyContainer>
        <CadastroContainer>
          <TextCardStyled>
            <p>
              Esta é nossa área de cadastros, aqui você poderá realizar cadastro
              de livros, funcionários e usuários da biblioteca.
            </p>
            <p>
              Para atualizar informações de cadastros já existentes, acesse a
              área de consultas.
            </p>
          </TextCardStyled>
          <div>
            <Button text="Cadastro de Livros" path="/login" />
            <Button text="Cadastro de Funcionarios" path="/login" />
            <Button text="Cadastro de Usuarios" path="/login" />
          </div>
        </CadastroContainer>
      </BodyContainer>

      <Footer />
    </>
  );
}