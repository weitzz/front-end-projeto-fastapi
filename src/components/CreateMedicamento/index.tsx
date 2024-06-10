"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import useModal from "@/src/hooks/useModal";
import { FormPost2 } from "../FormPost/FormPost2";
import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import { toast } from "react-toastify";
import { postData } from "@/src/services";
import {
  Control,
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";

import Button from "../Button/Button";

const INITIAL_VALUES: TMedicamentoPost = {
  nome: "",
  preco: 0,
  data_de_validade: "",
  estoque: false,
  quantidade: "",
  imagem: "",
};

const CreateMedicamento = () => {
  const { isModalOpen, openModal, closeModal, toggleModal } = useModal();
  const [file, setFile] = useState<File | null>(null);
  const methods: UseFormReturn<TMedicamentoPost> = useForm({
    defaultValues: INITIAL_VALUES,
  });

  return (
    <>
      <Button
        className="border-2 w-auto border-white bg-green-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center mb-4
                    justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-150 ease-in-out"
        onClick={() => openModal()}
      >
        Adicionar
      </Button>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => closeModal()}
        title="Cadastrar medicamento"
      >
        <FormPost2 />
      </Modal>
    </>
  );
};

export default CreateMedicamento;
