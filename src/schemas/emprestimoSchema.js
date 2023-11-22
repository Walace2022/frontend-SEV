import { z } from "zod";

export const EmprestimoSchema = z.object({
  CPF: z
    .string()
    .min(1, { message: "Selecione um usuario" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  livro: z
    .string()
    .min(1, { message: "Selecione um livro" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
});
