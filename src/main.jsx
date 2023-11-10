import React from "react";
import ReactDOM from "react-dom/client";

//Estilo Global
import { GlobalStyled } from "./GlobalStyled";

//Rotas
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
