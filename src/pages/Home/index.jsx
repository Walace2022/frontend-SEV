import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { FuncionarioContext } from "../../Context/FuncionarioContext";

export function Home() {
  const navigate = useNavigate();

  const { funcionario } = useContext(FuncionarioContext);

  useEffect(() => {
    if (!Cookies.get("token")) {
      deslogar();
    }
  }, []);

  function deslogar() {
    Cookies.remove("token");
    navigate("/login");
  }

  return (
    <>
      <Header />
      <h1>Ola {funcionario.nome}</h1>
      <button onClick={deslogar}>Sair</button>
    </>
  );
}
