import * as z from "zod";
export const loginFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "O Email é obrigatório" })
      .email("Email inválido"),
    password: z.string().min(1, { message: 'Senha é obrigatório' }),
  })
  .required();


  export const registerFormSchema = z
  .object({
    nome: z.string().min(5, { message: "O Nome é obrigatório" }),
    email: z
      .string()
      .min(1, { message: "O Email é obrigatório" })
      .email("Email inválido"),
    password: z
      .string()
      .min(8, { message: "Mínimo de 8 letras" })
      .max(20, { message: "Máximo de 20 letras" }),
    
   
    })
    .required()
   
    
    