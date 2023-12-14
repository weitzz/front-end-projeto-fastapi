"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const registerFormSchema = z
  .object({
    nome: z.string().min(5, { message: "O Nome é obrigatório" }),
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

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(registerFormSchema),
  });

  type FormProps = z.infer<typeof registerFormSchema>;
  console.log(errors);

  const handleForm = (data: FormProps) => {
    console.log(data);
  };
  return (
    <>
      <section className="w-full md:w-3/5 p-5">
        <h2 className="text-2xl font-semibold text-green-600">
          Crie sua conta
        </h2>
        <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-400">É rápido e fácil!</p>
        <form
          className="flex flex-col items-center w-full mb-3"
          onSubmit={handleSubmit(handleForm)}
        >
          <Input
            type="text"
            placeholder="Nome"
            name="nome"
            inputIcon={<FiUser />}
            disabled={false}
            register={register}
            error={errors.nome?.message}
          />

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

          <div className="mb-3 flex items-center p-2 cursor-pointer w-80">
            <input type="checkbox" className="m-2" id="check" />
            <label
              htmlFor="check"
              className="text-xs text-neutral-400 text-left"
            >
              Ao criar uma conta, você concorda com os
              <span className="font-semibold"> Termos e Condições</span> e com
              nossa
              <span className="font-semibold"> Política de Privacidade.</span>
            </label>
          </div>

          <Button className="border-2 w-80 border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600">
            <FiLogIn className="m-1" /> Criar conta
          </Button>
        </form>
        <div className="border w-full border-gray-100 inline-block mb-2 "></div>
        <div className="flex flex-col items-center">
          <div className="border-2 w-auto cursor-pointer border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600">
            <FcGoogle className="m-1" />
            <Link href="/conta-google">Entrar com a conta Google</Link>
          </div>
        </div>
      </section>

      <section className="w-full md:w-2/5 bg-green-600 text-neutral-100 rounded-tr-lg rounded-br-lg py-36 px-12">
        <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
          Bem vindo!
        </h2>
        <div className="border-2 w-10 border-white inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-200">
          Por favor, faça o login na sua conta
        </p>
        <Link
          className="border-2 border-white text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600"
          href="/login"
        >
          <FiLogIn className="m-1" /> Entrar
        </Link>
      </section>
    </>
  );
};

export default Register;
