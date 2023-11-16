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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <FuncionarioProvider>
      <RouterProvider router={router} />
    </FuncionarioProvider>
  </React.StrictMode>
);
