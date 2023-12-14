"use client";
import Input from "@/components/Input/Input";
import Title from "@/components/Title/Title";
import { TMedicamentoPost } from "@/types";
import { useForm, SubmitHandler, Controller, Form } from "react-hook-form";
import Image from "next/image";
import Checkbox from "@/components/Checkbox/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FileInput from "@/components/FileInput/FileInput";

const CadastrarMedicamento = () => {
  const router = useRouter();
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
    <div className="flex justify-center py-8 h-auto">
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
                {/* <Input {...field} /> */}
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
                {/* <Input {...field} placeholder="0.00" /> */}
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
                <label className="text-gray-500">Validade </label>
                {/* <Input {...field} type="date" /> */}
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
                {/* <Input {...field} /> */}
              </div>
            )}
          />
        </div>
        <Checkbox name="estoque" control={control} defaultValue={false} />
        {/* <FileInput file={file} handleImgChange={() => handleImgChange} /> */}
        <div className="w-full mt-6 flex justify-between">
          <Button
            type="button"
            onClick={() => router.push("/")}
            className="border-2 w-52 border-white bg-gray-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600 transition duration-150 ease-in-out"
          >
            Voltar
          </Button>
          <Button
            type="submit"
            onClick={() => console.log("clicou")}
            className="border-2 w-52 border-white bg-green-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-150 ease-in-out"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarMedicamento;
