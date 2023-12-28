"use client";
import Button from "@/src/components/Button/Button";
import Input from "@/src/components/Input/Input";
import Link from "next/link";
import React from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { loginFormSchema } from "@/validations/schemasForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const methods = useForm<FormProps>({
    resolver: zodResolver(loginFormSchema),
  });

  type FormProps = z.infer<typeof loginFormSchema>;

  const onSubmit = methods.handleSubmit(async (data: FormProps) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/medicamentos",
    }).then((res) => {
      if (res?.error) {
        methods.setError("email", {
          message: "Algo deu errado",
          type: "error",
        });
      } else {
        toast.success("Seja bem vindo");
        router.push("/medicamentos");
      }
    });
  });

  return (
    <>
      <section className="w-full md:w-3/5 p-5">
        <h2 className="text-2xl font-semibold text-green-600">Bem-vindo!</h2>
        <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-400">
          Por favor, faça o login na sua conta
        </p>
        <FormProvider {...methods}>
          <div className="flex flex-col items-center w-full mb-3">
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
              name="password"
              placeholder="Senha"
              type="password"
              inputIcon={<FiLock />}
              disabled={false}
              control={methods.control}
              error={methods.formState.errors.password?.message}
            />

            <Button
              variant="primary"
              className="w-80"
              onClick={() => onSubmit()}
            >
              <FiLogIn className="m-1" /> Entrar
            </Button>
          </div>
        </FormProvider>
        <div className="text-green-600 text-sm text-right mr-24">
          <Link href="/esqueceu-senha">Esqueceu a senha?</Link>
        </div>
        <div className="border w-full border-gray-100 inline-block mb-2 "></div>
        <div className="flex flex-col items-center">
          <Button variant="primary" onClick={() => signIn("google")}>
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
          <Button href="/register" variant="default" className="w-72 ">
            <FiLogIn className="m-1" /> Criar conta
          </Button>
        </div>
      </section>
    </>
  );
};

export default Login;
