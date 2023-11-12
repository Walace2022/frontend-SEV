import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { FuncionarioContext } from "../../Context/FuncionarioContext";
import NavBar from "../../components/NavBar";

export function Home() {
  const { funcionario } = useContext(FuncionarioContext);

  return (
    <>
      <Header />
      <NavBar />
      <h1>Ola {funcionario[0]}</h1>
    </>
  );
}
