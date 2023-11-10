import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginService } from "../../services/loginService";
import { Input } from "../../components/Input";

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  async function login(data) {
    try {
      const response = await loginService(data);
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <Input
          type="CPF"
          placeholder="Digite seu cpf."
          name="CPF"
          register={register}
        />
        {errors.CPF && <p>{errors.CPF.message}</p>}
        <Input
          type="password"
          placeholder="Digite sua senha"
          name="senha"
          register={register}
        />
        {errors.senha && <p>{errors.senha.message}</p>}

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
