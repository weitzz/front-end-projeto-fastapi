import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import React, { useState } from "react";
import {
  Control,
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import DatePickerInput from "../DataPicker/DataPicker";
import { toast } from "react-toastify";
import UploadImage from "../FileInput/UploadImage";
import useModal from "@/src/hooks/useModal";
import { postData } from "@/src/services";
interface FormPostProps {
  onSubmit?: SubmitHandler<TMedicamentoPost> | any;
  initialValue?: TMedicamentoPost;
  onFileChange?: () => void;
}

const INITIAL_VALUES: TMedicamentoPost = {
  nome: "",
  preco: 0,
  data_de_validade: "",
  estoque: false,
  quantidade: "",
  imagem: "",
};

const FormPost = () => {
  const { closeModal } = useModal();
  const [file, setFile] = useState<File | null>(null);
  const methods: UseFormReturn<TMedicamentoPost> = useForm({
    defaultValues: INITIAL_VALUES,
  });
  const onSubmit = async (data: TMedicamento) => {
    try {
      if (!file) throw new Error("Nenhum arquivo selecionado");

      const formData = new FormData();
      formData.append("imagem", file);
      formData.append("nome", data.nome);
      formData.append("preco", data.preco.toString());
      formData.append("data_de_validade", data.data_de_validade);
      formData.append("quantidade", data.quantidade);
      formData.append("estoque", data.estoque?.toString());

      console.log("file", file);

      const response = await postData(formData);

      // Lidar com a resposta do servidor (por exemplo, exibir uma mensagem de sucesso)
      console.log("Response from server:", response);
      toast.success("Medicamento cadastrado com sucesso");

      // Fechar o modal após o sucesso
      closeModal();
    } catch (error) {
      console.error("Erro ao cadastrar medicamento:", error);
      toast.error(`Erro ao cadastrar medicamento. Tente novamente.${error}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            <DatePickerInput
              name="data_de_validade"
              control={methods.control as unknown as Control<FieldValues>}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <Input
              label="Quantidade"
              type="number"
              disabled={false}
              name="quantidade"
              control={methods.control}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-4">
          <Checkbox
            name="estoque"
            defaultValue={false}
            control={methods.control as unknown as Control<FieldValues>}
          />
        </div>
        <UploadImage
          name="imagem"
          control={methods.control as unknown as Control<FieldValues>}
        />
        <div className="flex gap-2 items-center justify-between p-6 border-t border-solid rounded-b">
          <Button type="submit" variant="primary">
            Salvar
          </Button>
          <Button onClick={closeModal} variant="secondary">
            Cancelar
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormPost;
