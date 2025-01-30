import { z } from "zod";

export const step1Schema = z.object({
  nome: z.string().min(1, "O nome do álbum é obrigatório."),
  dataPublicacao: z.string().min(1, "A data de publicação é obrigatória."),
  artista: z.string().min(1, "O artista é obrigatório."),
  participacao: z.string().optional(),
});

export const fildsObrigatoryStep1 = ["nome", "dataPublicacao", "artista"];

export type Step1FormValues = z.infer<typeof step1Schema>;
