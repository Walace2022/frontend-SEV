import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { FuncionarioContext } from "../../Context/FuncionarioContext";
import NavBar from "../../components/NavBar";
import { BodyContainer } from "../../GlobalStyled";

import { TextCardStyled } from "../../components/TextCard/TextCardStyled";
import { HomeContainer } from "./HomeStyled";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Home() {
  const { funcionario } = useContext(FuncionarioContext);

  return (
    <>
      <Header />
      <NavBar />
      <BodyContainer>
        <HomeContainer>
          <TextCardStyled>
            <p>
              Olá, <strong>{funcionario[0]}</strong>! Seja bem vindo(a) ao
              Sistema Érico Veríssimo!
            </p>
            <p>
              Esse sistema foi pensado para facilitar o seu trabalho como
              funcionário da Biblioteca Érico Veríssimo.
            </p>
            <p>
              Nós contamos com três funções principais: cadastros, empréstimos e
              consultas.
            </p>
            <p>
              Você poderá escolher qual dessas funções você quer realizar
              através dos botões a seguir ou da barra de navegação na parte
              superior do SEV.
            </p>
          </TextCardStyled>
          <div>
            <Button text="Cadastro" path="/cadastro" />
            <Button text="Emprestimo" path="/login" />
            <Button text="Consulta" path="/consulta" />
          </div>
        </HomeContainer>
      </BodyContainer>

      <Footer />
    </>
  );
}
