"use-client";
import { SubmitHandler, useForm } from "react-hook-form";
import { TMedicamento } from "@/types";
import Input from "../Input/Input";
import Image from "next/image";
import router from "next/router";
import UploadImage from "../FileInput/fileInput";

interface FormProps {
  defaultValues?: TMedicamento;
  onSubmit: SubmitHandler<TMedicamento>;
}

const Form = ({ defaultValues, onSubmit }: FormProps) => {
  const { register, handleSubmit, watch, reset, setValue } =
    useForm<TMedicamento>();
  const handleFormSubmit: SubmitHandler<TMedicamento> = (
    data: TMedicamento
  ) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-wrap -mx-3  py-6">
        <div className="w-full md:w-1/2 px-3 md:mb-0 ">
          <label className="text-gray-500">Nome do medicamento</label>
          <Input {...register("nome")} name="nome" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="text-gray-500">Preço</label>
          <Input
            {...register("preco")}
            name="preco"
            placeholder="R$"
            type="number"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 md:mb-0 ">
          <label className="text-gray-500">Validade</label>
          <Input
            {...register("data_de_validade")}
            type="date"
            name="data_de_validade"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 ">
          <label className="text-gray-500">Estoque</label>
          <input
            id="default-checkbox"
            type="checkbox"
            {...register("estoque")}
            checked={watch("estoque") as boolean}
            onChange={(e) => {
              setValue("estoque", e.target.checked); // Use setValue para atualizar o valor do campo
            }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label className="text-gray-500">Quantidade</label>
          <Input {...register("quantidade")} name="quantidade" type="number" />
        </div>
      </div>
      {/* <UploadImage
        onChange={(e: any) => {
          setValue("imagem", e.target.files[0]);
        }}
      /> */}
      <div className="w-full  mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="block px-6 py-2.5 bg-sky-600 text-neutral-100 font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Voltar
        </button>
        <button
          type="submit"
          className="block cursor-pointer  px-6 py-2.5 bg-green-600 text-neutral-100 font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default Form;
