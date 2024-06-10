"use client";

import Button from "@/src/components/Button/Button";
import {
  Control,
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import Title from "@/src/components/Title/Title";

import { editData, getId } from "@/src/services";
import { TMedicamento } from "@/src/types/types";
import { toast } from "react-toastify";

import { FormPost2 } from "@/src/components/FormPost/FormPost2";

interface PageProps {
  params: { id: string; nome: string };
  searchParams: string;
  isEditing: boolean;
}

export default async function MedicamentoDetails({ params }: PageProps) {
  const medicamento = await getId(params.id);

  console.log(medicamento);

  return (
    <div className="grid gap-8 grid-cols-1 mb-8">
      <Title text="Editar" />
      <FormPost2 product={medicamento} />
    </div>
  );
}
