"use client";
import { postData } from "@/src/services";
import { TMedicamentoPost } from "@/src/types/types";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import DatePickerInput from "../DataPicker/DataPicker";
import FileInput from "../FileInput/FileInput";
import { toast } from "react-toastify";
interface FormPostProps {
  submit?: SubmitHandler<TMedicamentoPost>;
  edit: boolean;
  initialValue?: TMedicamentoPost;
}
const FormPost = ({ submit, edit, initialValue }: FormPostProps) => {
  const methods = useForm<TMedicamentoPost | any>({
    defaultValues: initialValue,
    mode: "all",
  });
  const [file, setFile] = useState<File>();

  const onSubmit = methods.handleSubmit(async (data: TMedicamentoPost) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("imagem", file);
    formData.append("nome", data.nome);
    formData.append("preco", data.preco);
    formData.append("data_de_validade", data.data_de_validade);
    formData.append("quantidade", data.quantidade);
    formData.append("estoque", data.estoque?.toString());

    console.log("file", file);
    console.log(data.data_de_validade);
    const save = await postData(formData);

    if (save) {
      toast.success("Cadastrado com sucesso");
      methods.reset();
    } else {
      alert("Erro ao cadastrar o medicamento. Tente novamente mais tarde.");
      toast.error(
        "Erro ao cadastrar o medicamento. Tente novamente mais tarde."
      );
    }
  });
  const handleImgChange = async (file: File | null) => {
    console.log("Arquivo selecionado:", file);
    if (file) await setFile(file);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-wrap mx-3  py-6">
        <div className="w-full md:w-1/2 px-3 md:mb-0 ">
          <Input
            label="Nome do medicamento"
            name="nome"
            placeholder="medicamento"
            type="text"
            disabled={false}
            control={methods.control}
          />
        </div>

        <div className="w-full md:w-1/2 px-3">
          <Input
            label="Preço"
            name="preco"
            placeholder="0.00"
            type="text"
            disabled={false}
            control={methods.control}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <DatePickerInput name="data_de_validade" control={methods.control} />
        </div>

        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Input
            label="Quantidade"
            type="number"
            disabled={false}
            name="quantidade"
            placeholder={""}
            control={methods.control}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-4">
        <Checkbox
          name="estoque"
          defaultValue={false}
          control={methods.control}
        />
      </div>
      <FileInput
        name="imagem"
        control={methods.control}
        onFileChange={handleImgChange}
      />

      <Button
        onClick={onSubmit}
        className="border-2 w-52 border-white bg-green-600
                    text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-150 ease-in-out"
      >
        {edit ? "Editar" : "Cadastrar"}
      </Button>
    </FormProvider>
  );
};

export default FormPost;
