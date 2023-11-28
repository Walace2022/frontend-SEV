import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-sev.onrender.com";

export function cadUsuarioService(data) {
  const response = axios.post(`${baseURL}/usuario`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getUsuariosService() {
  const response = axios.get(`${baseURL}/usuario`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteUsuarioService(id) {
  const response = axios.delete(`${baseURL}/usuario/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function updateUsuarioService(data, id) {
  if (data.nome === "") {
    delete data.nome;
  }
  if (data.endereco === "") {
    delete data.endereco;
  }
  if (data.telefone === "") {
    delete data.telefone;
  }
  const response = axios.patch(`${baseURL}/usuario/${id}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
