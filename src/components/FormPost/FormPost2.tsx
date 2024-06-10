import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import Input from "../Input/Input";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "../DataPicker/DataPicker";
import { toast } from "react-toastify";
import Button from "../Button/Button";

import ContainerInput from "../FileInput/ContainerInput";
import { editData, postData } from "@/src/services";
import useModal from "@/src/hooks/useModal";

const createProductSchema = z.object({
  nome: z.string().min(1, { message: "Name is required" }),
  preco: z.coerce.number(),
  data_de_validade: z.string(),
  quantidade: z.coerce.number(),
  imagem: z.custom<File>((v) => v instanceof File, {
    message: "Imagem é obrigatória",
  }),
});

const updateProductSchema = createProductSchema.extend({
  imagem: createProductSchema.shape.imagem.optional(),
});

export type ProductForm2Values =
  | z.infer<typeof createProductSchema>
  | z.infer<typeof updateProductSchema>;

export type MedicamentoType = {
  id?: number;
  nome: string;
  preco: number;
  data_de_validade: any;
  quantidade: number;
  imagem: any;
};

interface ProductForm2Props {
  product?: MedicamentoType;
}

export const FormPost2 = ({ product }: ProductForm2Props) => {
  const { closeModal } = useModal();
  const [imagePreview, setImagePreview] = useState<string | null>(
    product ? product.imagem : null
  );

  const isAddMode = !product;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductForm2Values>({
    resolver: zodResolver(
      isAddMode ? createProductSchema : updateProductSchema
    ),
    defaultValues: product
      ? {
          nome: product?.nome ?? "",
          preco: product?.preco,
          quantidade: product?.quantidade,
          data_de_validade: product?.data_de_validade,
          imagem: product?.imagem,
        }
      : undefined,
  });

  // revoke object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const onSubmitHandler = async (data: ProductForm2Values) => {
    const formData = new FormData();
    console.log("salvo os dados =>", data);
    formData.append("nome", data.nome);
    formData.append("preco", data.preco.toString());
    formData.append("data_de_validade", data.data_de_validade);
    formData.append("quantidade", data.quantidade.toString());
    if (data.imagem) {
      formData.append("imagem", data.imagem);
    }

    if (isAddMode) {
      // create product
      const response = await postData(formData);
      console.log(formData);
      // Lidar com a resposta do servidor (por exemplo, exibir uma mensagem de sucesso)
      console.log("Response from server:", response);
      toast.success("Medicamento cadastrado com sucesso");

      closeModal();
    } else {
      // update product
      const response = editData(formData);
      // await fetch(`http://localhost:8000/api/medicamentos/${product.id}`),
      //   {
      //     method: "PUT",
      //     body: { id: product!.id, ...data, imagem: data.imagem },
      //   };
      console.log("Response from server:", response);
      toast.success("Medicamento editado com sucesso");
      console.log("OBJ=>", { id: product!.id, ...data, imagem: data.imagem });
    }

    reset();
    setImagePreview(product?.imagem ?? null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex flex-wrap mx-3  py-6">
        <div className="w-full md:w-1/2 px-3 md:mb-0 ">
          <Input
            label="Nome do medicamento"
            name="nome"
            placeholder="medicamento"
            type="text"
            disabled={false}
            control={control}
            error={errors.nome?.message}
          />
        </div>

        <div className="w-full md:w-1/2 px-3">
          <Input
            name="preco"
            label="Preço"
            placeholder="0.00"
            type="number"
            min={0}
            max={100}
            disabled={false}
            control={control}
            error={errors.preco?.message}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          {/* <DatePickerInput
            name="data_de_validade"
            control={control}
            error={errors.data_de_validade?.message}
          /> */}
          <input type="date" {...register("data_de_validade")} />
          <Input
            name="quantidade"
            label="Quantidade"
            type="number"
            disabled={false}
            control={control}
            error={errors.quantidade?.message}
          />
        </div>
      </div>
      <Controller
        name="imagem"
        control={control}
        render={({ field: { ref, name, onBlur, onChange } }) => (
          <>
            <ContainerInput />
            <input
              id="uploadImage"
              className="sr-only"
              type="file"
              ref={ref}
              name={name}
              onBlur={onBlur}
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(e.target.files?.[0]);
                setImagePreview(file ? URL.createObjectURL(file) : null);
              }}
            />
          </>
        )}
      />

      {imagePreview && (
        <Image src={imagePreview} alt="preview" width={300} height={200} />
      )}
      {errors.imagem && (
        <span className="text-rose-600 text-sm mb-1">
          {errors.imagem.message}
        </span>
      )}
      <div className="flex gap-2 items-center justify-between p-6 border-t border-solid rounded-b">
        <Button
          type="submit"
          variant="primary"
          disabled={(!isAddMode && !isDirty) || isSubmitting}
        >
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
        <Button onClick={closeModal} variant="secondary">
          Cancelar
        </Button>
      </div>
    </form>
  );
};
