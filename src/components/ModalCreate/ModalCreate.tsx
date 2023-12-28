import React, { useState } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";

import Image from "next/image";
import Checkbox from "../Checkbox/Checkbox";
import { useRouter } from "next/navigation";

import { TMedicamentoPost } from "@/src/types/types";
import { postData } from "@/src/services";
import FormPost from "../FormPost/FormPost";

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
  } = useForm<TMedicamentoPost | any>({
    defaultValues: {},
    mode: "all",
  });
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

    const save = await postData(formData);

    if (save) {
      reset();
      router.refresh();
    } else {
      alert("Erro ao cadastrar o medicamento. Tente novamente mais tarde.");
    }
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
                  <FormPost submit={onSubmit} edit={false} />

                  <div className="flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b">
                    <Button
                      className="border-2 w-52 border-white bg-gray-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600 transition duration-150 ease-in-out"
                      onClick={setShow}
                    >
                      Fechar
                    </Button>
                  </div>
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
