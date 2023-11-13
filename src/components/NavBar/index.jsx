import { Link, useNavigate } from "react-router-dom";
import { NavBarContainer } from "./NavBarStyled";
import { useContext, useEffect } from "react";
import { FuncionarioContext } from "../../Context/FuncionarioContext";
import Cookies from "js-cookie";

export default function NavBar() {
  const navigate = useNavigate();

  const { funcionario } = useContext(FuncionarioContext);

  useEffect(() => {
    if (!Cookies.get("token") || funcionario.length === 0) {
      deslogar();
    }
  }, []);

  function deslogar() {
    Cookies.remove("token");
    navigate("/login");
  }

  return (
    <>
      <NavBarContainer>
        <div>
          <ul>
            <li>
              <Link to="/">Pagina Inicial</Link>
            </li>
            <li>
              <Link to="/">Empréstimos</Link>
            </li>
            <li>
              <Link to="/Cadastro">Cadastros</Link>
            </li>
            <li>
              <Link to="/">Consultas</Link>
            </li>
          </ul>
          <div>
            <h3>{funcionario[0]}</h3>
            <button onClick={deslogar}>Sair</button>
          </div>
        </div>
        <hr />
      </NavBarContainer>
    </>
  );
}
