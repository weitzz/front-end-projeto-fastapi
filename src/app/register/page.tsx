"use client";
import Button from "@/src/components/Button/Button";
import Input from "@/src/components/Input/Input";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/validations/schemasForm";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";

const Register = () => {
  const [message, setMessage] = useState(null);
  // const session = await getServerSession();
  // if (session) {
  //   redirect("/medicamentos");
  // }
  const methods = useForm<FormProps>({
    resolver: zodResolver(registerFormSchema),
  });

  type FormProps = z.infer<typeof registerFormSchema>;

  // const handleFormSubmit = async (data: FormProps) => {
  //   console.log(data);
  //   const url = `http://localhost:8000/api/usuario/signup`;
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   if (res.ok) {
  //     console.log(data);
  //     methods.reset();
  //   } else {
  //     const response = await res.json();
  //     console.log(response);
  //   }
  // };

  const onSubmit = methods.handleSubmit(async (data: FormProps) => {
    console.log(data);
    const url = `http://localhost:8000/api/usuario/signup`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log(data);
      toast.success("Cadastrado com sucesso.");
      methods.reset();
    } else {
      const response = await res.json();
      console.log(response);
    }
  });

  return (
    <>
      <section className="w-full md:w-3/5 p-5">
        <h2 className="text-2xl font-semibold text-green-600">
          Crie sua conta
        </h2>
        <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-400">É rápido e fácil!</p>
        <FormProvider {...methods}>
          <div className="flex flex-col items-center w-full mb-3">
            <Input
              type="text"
              placeholder="Nome"
              name="nome"
              inputIcon={<FiUser />}
              disabled={false}
              control={methods.control}
              error={methods.formState.errors.nome?.message}
            />

            <Input
              name="email"
              placeholder="Email"
              type="email"
              inputIcon={<FiMail />}
              disabled={false}
              control={methods.control}
              error={methods.formState.errors.email?.message}
            />

            <Input
              control={methods.control}
              name="password"
              placeholder="Senha"
              type="password"
              inputIcon={<FiLock />}
              disabled={false}
              error={methods.formState.errors.password?.message}
            />
            <Button
              onClick={() => onSubmit()}
              className="border-2 w-80 border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600"
            >
              <FiLogIn className="m-1" /> Criar conta
            </Button>
          </div>
        </FormProvider>
        <div className="border w-full border-gray-100 inline-block mb-2 "></div>
        <div className="flex flex-col items-center">
          <Button variant="primary" onClick={() => signIn("google")}>
            <FcGoogle className="m-1" />
            Entrar com a conta Google
          </Button>
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
        <Button href="/login" variant="default">
          <FiLogIn className="m-1" /> Entrar
        </Button>
      </section>
    </>
  );
};

export default Register;
