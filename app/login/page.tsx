"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const loginFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "O Email é obrigatório" })
      .email("Email inválido")
      .refine((e) => e === "abcd@fg.com", "Email não cadastrado"),
    password: z
      .string()
      .min(8, { message: "Mínimo de 8 letras" })
      .max(20, { message: "Máximo de 20 letras" }),
  })
  .required();

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(loginFormSchema),
  });

  type FormProps = z.infer<typeof loginFormSchema>;
  console.log(errors);

  const handleForm = (data: FormProps) => {
    console.log(data);
  };

  return (
    <>
      <section className="w-full md:w-3/5 p-5">
        <h2 className="text-2xl font-semibold text-green-600">Bem-vindo!</h2>
        <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-400">
          Por favor, faça o login na sua conta
        </p>
        <form
          className="flex flex-col items-center w-full mb-3"
          onSubmit={handleSubmit(handleForm)}
        >
          <Input
            name="email"
            placeholder="Email"
            type="email"
            inputIcon={<FiMail />}
            disabled={false}
            register={register}
            error={errors.email?.message}
          />

          <Input
            name="password"
            placeholder="Senha"
            type="password"
            inputIcon={<FiLock />}
            disabled={false}
            register={register}
            error={errors.password?.message}
          />

          <Button variant="primary" className="w-80">
            <FiLogIn className="m-1" /> Entrar
          </Button>
        </form>
        <div className="text-green-600 text-sm text-right mr-24">
          <Link href="/esqueceu-senha">Esqueceu a senha?</Link>
        </div>
        <div className="border w-full border-gray-100 inline-block mb-2 "></div>
        <div className="flex flex-col items-center">
          <Button
            variant="primary"
            href="/conta-google"
            className="transition duration-150 ease-in-out w-80"
          >
            <FcGoogle className="m-1" />
            Entrar com a conta Google
          </Button>
        </div>
      </section>

      <section className="w-full md:w-2/5 bg-green-600 text-neutral-100  rounded-tr-lg rounded-br-lg py-8 md:py-36 px-4 md:px-12">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
          Crie sua conta
        </h2>
        <div className="border-2 w-10 border-white inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-200">É rápido e fácil!</p>
        <div className="flex items-center justify-center">
          <Button variant="default" href="/register" className="w-72 ">
            <FiLogIn className="m-1" /> Criar conta
          </Button>
        </div>
      </section>
    </>
  );
};

export default Login;
