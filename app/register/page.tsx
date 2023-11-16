import Button from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";

const Register = () => {
  return (
    <Form>
      <section className="w-full md:w-3/5 p-5">
        <h2 className="text-2xl font-semibold text-green-600">
          Crie sua conta
        </h2>
        <div className="border-2 w-10 border-green-600 inline-block mb-2 "></div>
        <p className="mb-10 text-neutral-400">É rápido e fácil!</p>
        <form className="flex flex-col items-center w-full mb-3">
          <div className="p-2 flex items-center border-2 w-80 border-gray-100 text-gray-500 rounded-lg mb-3">
            <FiUser className="m-2" />
            <Input type="text" placeholder="Nome" />
          </div>
          <div className="p-2 flex items-center border-2 w-80 border-gray-100 text-gray-500 rounded-lg mb-3">
            <FiMail className="m-2" />
            <Input type="email" placeholder="Email" />
          </div>
          <div className="p-2 flex items-center border-2 w-80 border-gray-100 text-gray-500 rounded-lg mb-3">
            <FiLock className="m-2 " />
            <Input type="password" placeholder="Senha" />
          </div>
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
          <div className="border-2 w-80 cursor-pointer border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600">
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
    </Form>
  );
};

export default Register;
