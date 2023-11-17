import { z } from "zod";

export const FuncionarioSchema = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  CPF: z
    .string()
    .min(11, { message: "O CPF tem que ter 11 digitos" })
    .max(11, { message: "O CPF tem que ter 11 digitos" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  senha: z
    .string()
    .min(8, { message: "A senha deve ter no minimo 8 caracteres." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  comfirmSenha: z
    .string()
    .min(8, { message: "A senha deve ter no minimo 8 caracteres." })
    .refine((data) => data === senha.value, {
      message: "As senhas não correspondem",
    }),
});
