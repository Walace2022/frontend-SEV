import { createContext, useState } from "react";

export const FuncionarioContext = createContext();

export default function FuncionarioProvider({ children }) {
  const [funcionario, setFuncionario] = useState([]);

  return (
    <FuncionarioContext.Provider value={{ funcionario, setFuncionario }}>
      {children}
    </FuncionarioContext.Provider>
  );
}
