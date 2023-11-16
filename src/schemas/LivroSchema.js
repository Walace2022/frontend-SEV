import { z } from "zod";

export const LivroSchema = z.object({
  nome: z
    .string()
    .min(1, { message: "O titulo não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  edicao: z
    .string()
    .min(1, { message: "A edição não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  autor: z
    .string()
    .min(1, { message: "O autor não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
  ano: z
    .string()
    .min(1, { message: "O ano não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
});
