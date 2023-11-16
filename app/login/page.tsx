import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import router from "next/router";
import React from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import CheckBoxInput from "@/components/Checkbox/Checkbox";
import Form from "@/components/Form/Form";

const Login = () => {
  return (
    <Form>
      <section className="w-full md:w-3/5 p-5">
        <h2 className="text-2xl font-semibold text-green-600">Bem-vindo!</h2>
        <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-400">
          Por favor, faça o login na sua conta
        </p>
        <form className="flex flex-col items-center w-full mb-3">
          <div className="p-2 flex items-center border-2 w-80 border-gray-100 text-gray-500 rounded-lg mb-3">
            <FiMail className="m-2" />
            <Input type="email" placeholder="Email" />
          </div>
          <div className="p-2 flex items-center border-2 w-80 border-gray-100 text-gray-500 rounded-lg mb-3">
            <FiLock className="m-2 " />
            <Input type="password" placeholder="Senha" />
          </div>

          <Button className="border-2 w-80 border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600">
            <FiLogIn className="m-1" /> Entrar
          </Button>
        </form>
        <div className="text-green-600 text-sm text-right mr-24">
          <Link href="/esqueceu-senha">Esqueceu a senha?</Link>
        </div>
        <div className="border w-full border-gray-100 inline-block mb-2 "></div>
        <div className="flex flex-col items-center">
          <div className="border-2 w-80 cursor-pointer border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600">
            <FcGoogle className="m-1" />
            <Link href="/conta-google">Entrar com a conta Google</Link>
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
          className="border-2 border-white text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600"
          href="/register"
        >
          <FiLogIn className="m-1" /> Criar conta
        </Link>
      </section>
    </Form>
  );
};

export default Login;
