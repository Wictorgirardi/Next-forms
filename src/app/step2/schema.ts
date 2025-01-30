import { z } from "zod";

export const step2Schema = z.object({
  duracaoMinutos: z
    .string()
    .min(1, "A duração deve ser maior que 0."),
  quantidadeMusicas: z
    .string()
    .min(1, "O álbum deve ter pelo menos 1 música."),
  subgenero: z.string().optional(),
  url: z.string().optional(),
});

export const fildsObrigatoryStep2 = ["duracaoMinutos", "quantidadeMusicas"];

export type Step2FormValues = z.infer<typeof step2Schema>;
