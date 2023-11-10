import { z } from "zod";

export const loginSchema = z.object({
  CPF: z.string(),
  senha: z
    .string()
    .min(5, { message: "Senha deve ter no mínimo 6 caracteres." }),
});
