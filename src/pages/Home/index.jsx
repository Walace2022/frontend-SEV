import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

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
      <h1>Ola {Cookies.get("token")}</h1>
      <button onClick={deslogar}>Sair</button>
    </>
  );
}
