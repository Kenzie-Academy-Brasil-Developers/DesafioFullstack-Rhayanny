import { z } from "zod";

export const resgisterFormSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Forneça um email válido"),
  phone: z.string().nonempty("O Telefone é obrigatório"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "São necessários pelo menos 8 caracteres.")
    .regex(/[A-Z]+/, "É necessário pelo menos uma letra maiuscula.")
    .regex(/[A-Z]+/, " É necessário pelo menos uma letra minuscula. ")
    .regex(/[0-9]+/, "É necessário pelo menos um numero.")
    .regex(
      /[!@#$%^&*()+{}[\]:;<>,.?~\/]/,
      "É necessário pelo menos um caracter especial."
    ),
});
