import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

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