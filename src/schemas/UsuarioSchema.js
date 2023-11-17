import { z } from "zod";

export const UsuarioSchema = z.object({
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
  endereco: z
    .string()
    .min(1, { message: "O endereço não pode ser vazio." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  telefone: z
    .string()
    .min(8, { message: "Digite o Telefone Completo." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
});
