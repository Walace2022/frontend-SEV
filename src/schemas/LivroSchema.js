import { z } from "zod";

export const LivroSchema = z.object({
  nome: z.string(),
  edicao: z.string(),
  autor: z.string(),
  ano: z.string(),
});
