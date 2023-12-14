"use client";

import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
const loginFormSchema = z
  .object({
    email: z.string().email("Email inválido").min(1, "O Email é obrigatório"),
    password: z
      .string()
      .min(8, "Mínimo de 8 letras")
      .max(20, "Máximo de 20 letras"),
  })
  .required();

export default async function Home() {
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
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
          <section className="w-full md:w-3/5 p-5">
            <h2 className="text-2xl font-semibold text-green-600">
              Bem-vindo!
            </h2>
            <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
            <p className="mb-10 text-neutral-400">
              Por favor, faça o login na sua conta
            </p>
            <form className="flex flex-col items-center w-full mb-3">
              <Input
                name="email"
                placeholder="Email"
                type="email"
                inputIcon={<FiMail />}
                disabled={false}
                error={errors.email?.message}
                register={register}
              />

              <Input
                name="senha"
                placeholder="Senha"
                type="password"
                inputIcon={<FiLock />}
                disabled={false}
                error={errors.password?.message}
                register={register}
              />

              <Button className="border-2 w-80 border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600">
                <FiLogIn className="m-1" /> Entrar
              </Button>
            </form>
            <div className="text-green-600 text-sm text-right mr-24">
              <Link href="/esqueceu-senha">Esqueceu a senha?</Link>
            </div>
            <div className="border w-full border-gray-100 inline-block mb-2 "></div>
            <div className="flex flex-col items-center">
              <div className="border-2 w-80 cursor-pointer border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600 ">
                <FcGoogle className="m-1" />
                <Link
                  href="/conta-google"
                  className="transition duration-150 ease-in-out"
                >
                  Entrar com a conta Google
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full md:w-2/5 bg-green-600 text-neutral-100 rounded-tr-lg rounded-br-lg py-8 md:py-36 px-4 md:px-12">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
              Crie sua conta
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-2 "></div>
            <p className="mb-10 text-neutral-200">É rápido e fácil!</p>
            <Link
              className="border-2 border-white text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 transition duration-150 ease-in-out"
              href="/register"
            >
              <FiLogIn className="m-1" /> Criar conta
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
