import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-sev.onrender.com";

export function getEmprestimosService() {
    const response = axios.get(`${baseURL}/emprestimo`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  }

  export function deleteEmprestimosService(id) {
    const response = axios.delete(`${baseURL}/emprestimo/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  }

  export function createEmprestimoService(data) {
    const response = axios.post(`${baseURL}/emprestimo`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      return response;
  }

  export function devolucaoEmprestimosService(id) {
    const response = axios.patch(
    `${baseURL}/emprestimo/devolucao/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  }