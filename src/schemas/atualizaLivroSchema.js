import { z } from "zod";

export const AtualizaLivroSchema = z.object({
  nome: z.string(),
  edicao: z.string(),
  autor: z.string(),
  ano: z
    .string()
    .refine((value) => !(Number(value) > new Date().getFullYear()), {
      message: "O ano não pode ser maior que o ano atual",
    }),
});
