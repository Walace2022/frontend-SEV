import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-sev.onrender.com";

export function cadLivroService(data) {
  const response = axios.post(`${baseURL}/livro`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getLivrosService() {
  const response = axios.get(`${baseURL}/livro`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteLivroService(id) {
  const response = axios.delete(`${baseURL}/livro/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function updateLivroService(data, id) {
  if (data.nome === "") {
    delete data.nome;
  }
  if (data.edicao === "") {
    delete data.edicao;
  }
  if (data.autor === "") {
    delete data.autor;
  }
  if (data.ano === "") {
    delete data.ano;
  }
  const response = axios.patch(`${baseURL}/livro/${id}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
