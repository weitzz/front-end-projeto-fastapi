import React, { useState } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import {
  Controller,
  ErrorOption,
  FieldArray,
  FieldArrayPath,
  FieldError,
  FieldErrors,
  FieldValues,
  FormState,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import Input from "../Input/Input";

import Image from "next/image";
import Checkbox from "../Checkbox/Checkbox";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import FileInput from "../FileInput/FileInput";
import { TMedicamentoPost } from "@/src/types/types";
import { postData } from "@/src/services";

interface ModalProps {
  show: boolean;
  setShow: () => void;
}

const Modal = ({ show, setShow }: ModalProps) => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm<TMedicamentoPost | any>();
  const [file, setFile] = useState<File>();
  const router = useRouter();

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
    const save = await postData(formData);

    if (save) {
      reset();
      router.refresh();
      alert("ok");
    } else {
      alert("Erro ao cadastrar o medicamento. Tente novamente mais tarde.");
    }

    // try {
    //   const res = await fetch("http://localhost:8000/api/medicamentos/", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (res.ok) {
    //     console.log("salvou", data);

    //     alert("Medicamento cadastrado com sucesso!");
    //   }
    // } catch (error: any) {
    //   if (error.response && error.response.data) {
    //     console.error("Erro ao cadastrar o medicamento:", error.response.data);
    //     alert(
    //       "Erro ao cadastrar o medicamento: " + error.response.data.message
    //     );
    //   } else {
    //     console.error("Erro ao cadastrar o medicamento:", error);
    //     alert("Erro ao cadastrar o medicamento. Tente novamente mais tarde.");
    //   }
    // }
  };

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) await setFile(e.target.files[0]);
  };
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <Title text="Adicionar novo medicamento" />
                </div>
                <div className="relative p-5 flex-auto flex flex-col gap-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap mx-3  py-6">
                      <div className="w-full md:w-1/2 px-3 md:mb-0 ">
                        <Input
                          label="Nome do medicamento"
                          name="nome"
                          placeholder="medicamento"
                          type="text"
                          disabled={false}
                          register={register}
                        />
                      </div>

                      <div className="w-full md:w-1/2 px-3">
                        <Input
                          label="Preço"
                          name="preco"
                          placeholder="0.00"
                          type="text"
                          disabled={false}
                          register={register}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <Input
                          label="Validade"
                          placeholder="DD/MM/YYYY"
                          name="data_de_validade"
                          type="date"
                          disabled={false}
                          register={register}
                        />
                      </div>

                      <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <Input
                          label="Quantidade"
                          type="number"
                          disabled={false}
                          name="quantidade"
                          register={register}
                          placeholder={""}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-4">
                      <Checkbox
                        name="estoque"
                        control={control}
                        defaultValue={false}
                      />
                    </div>
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
                                <span className="font-semibold">
                                  Upload de imagem
                                </span>{" "}
                                or drag and drop
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
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b">
                      <Button
                        className="border-2 w-52 border-white bg-gray-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600 transition duration-150 ease-in-out"
                        onClick={setShow}
                      >
                        Fechar
                      </Button>
                      <Button
                        type="submit"
                        className="border-2 w-52 border-white bg-green-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-150 ease-in-out"
                      >
                        Salvar
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
};

export default Modal;
