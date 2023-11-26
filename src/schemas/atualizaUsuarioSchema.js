import { z } from "zod";

export const AtualizaUsuarioSchema = z.object({
  nome: z.string(),
  endereco: z.string(),
  telefone: z.string(),
});
