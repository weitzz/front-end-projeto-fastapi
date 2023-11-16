"use client";
import Input from "@/components/Input/Input";
import Title from "@/components/Title/Title";
import { TMedicamentoPost } from "@/types";
import { useForm, SubmitHandler, Controller, Form } from "react-hook-form";
import Image from "next/image";
import Checkbox from "@/components/Checkbox/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { postData } from "../api/routes";
import Button from "@/components/Button/Button";
import router from "next/router";

const CadastrarMedicamento = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<TMedicamentoPost | any>();
  const [file, setFile] = useState<File>();

  const onSubmit: SubmitHandler<TMedicamentoPost> = async (data) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("imagem", file);
    formData.append("nome", data.nome);
    formData.append("preco", data.preco);
    formData.append("data_de_validade", data.data_de_validade);
    formData.append("quantidade", data.quantidade);
    formData.append("estoque", data.estoque?.toString());

    console.log("file", file);

    try {
      const res = await fetch("http://localhost:8000/api/medicamentos/", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        console.log("salvou", data);
        reset();
        alert("Medicamento cadastrado com sucesso!");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.error("Erro ao cadastrar o medicamento:", error.response.data);
        alert(
          "Erro ao cadastrar o medicamento: " + error.response.data.message
        );
      } else {
        console.error("Erro ao cadastrar o medicamento:", error);
        alert("Erro ao cadastrar o medicamento. Tente novamente mais tarde.");
      }
    }
  };

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) await setFile(e.target.files[0]);
  };

  return (
    <div className="flex justify-center py-8 h-screen ">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <Title text="Adicionar novo medicamento" />
        <div className="flex flex-wrap -mx-3  py-6">
          <Controller
            name="nome"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <div className="w-full md:w-1/2 px-3 md:mb-0 ">
                <label className="text-gray-500">Nome do medicamento</label>
                <Input {...field} />
              </div>
            )}
          />
          <Controller
            name="preco"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <div className="w-full md:w-1/2 px-3">
                <label className="text-gray-500">Preço</label>
                <Input {...field} placeholder="0.00" />
              </div>
            )}
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <Controller
            name="data_de_validade"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label className="text-gray-500">Validade</label>
                <Input {...field} type="date" />
              </div>
            )}
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <Controller
            name="quantidade"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label className="text-gray-500">Quantidade</label>
                <Input {...field} />
              </div>
            )}
          />
        </div>
        <Checkbox name="estoque" control={control} defaultValue={false} />
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 md:mb-0">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Upload de imagem</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG ou JPG (MAX. 800x400px)
                  </p>
                </div>
              </label>
            </div>
            <input
              name="imagem"
              type="file"
              id="dropzone-file"
              accept="image/*"
              className="hidden"
              onChange={handleImgChange}
            />
          </div>
          <div className="flex items-center justify-center w-full pt-6">
            {file && (
              <Image
                src={URL.createObjectURL(file)}
                alt="Imagem selecionada"
                width="350"
                height="350"
                layout="rounded"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            )}
          </div>
        </div>

        <div className="w-full  mt-6 flex justify-between">
          <Button
            type="button"
            className="block px-6 py-2.5 bg-sky-600 text-neutral-100 font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => router.push("/")}
          >
            Voltar
          </Button>
          <Button
            type="submit"
            className="block cursor-pointer px-6 py-2.5 bg-green-600 text-neutral-100 font-medium text-xs leading-tight rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => router.push("/")}
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarMedicamento;
