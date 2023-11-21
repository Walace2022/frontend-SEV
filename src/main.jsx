import React from "react";
import ReactDOM from "react-dom/client";

//Estilo Global
import { GlobalStyled } from "./GlobalStyled";

//Rotas
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import FuncionarioProvider from "./Context/FuncionarioContext";
import { Cadastro } from "./pages/Cadastro";
import { CadastroLivro } from "./pages/CadastroLivro";
import { CadastroFuncionario } from "./pages/CadastroFuncionario";
import { CadastroUsuario } from "./pages/CadastroUsuario";
import { Consulta } from "./pages/Consulta";
import { Emprestimo } from "./pages/Emprestimo";
import {NovoEmprestimo} from "./pages/novoEmprestimo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/cadastro/livro",
    element: <CadastroLivro />,
  },
  {
    path: "/cadastro/funcionario",
    element: <CadastroFuncionario />,
  },
  {
    path: "/cadastro/usuario",
    element: <CadastroUsuario />,
  },
  {
    path: "/consulta",
    element: <Consulta />,
  },
  {
    path:"/emprestimo",
    element:<Emprestimo />
  },
  {
    path:"/emprestimo/novo",
    element:<NovoEmprestimo />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <FuncionarioProvider>
      <RouterProvider router={router} />
    </FuncionarioProvider>
  </React.StrictMode>
);
