import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { FuncionarioContext } from "../../Context/FuncionarioContext";
import NavBar from "../../components/NavBar";
import { BodyContainer } from "../../GlobalStyled";

export function Home() {
  const { funcionario } = useContext(FuncionarioContext);

  return (
    <>
      <Header />
      <NavBar />
      <BodyContainer>
        <h1>Ola {funcionario[0]}</h1>
      </BodyContainer>
    </>
  );
}
