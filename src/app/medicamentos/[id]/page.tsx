"use client";

import FormPost from "@/src/components/FormPost/FormPost";
import Title from "@/src/components/Title/Title";

import { editData, getId } from "@/src/services";
import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import Image from "next/image";
import { toast } from "react-toastify";

interface PageProps {
  params: { id: string; nome: string };
  searchParams: string;
  isEditing: boolean;
}

export default async function MedicamentoDetails({ params }: PageProps) {
  const medicamento = await getId(params.id);

  console.log(medicamento);

  const onSubmit = (data: TMedicamento) => {
    console.log("editar", data);
    toast.success("foi");
  };

  return (
    <div className="grid gap-8 grid-cols-1 mb-8">
      <Title text="Editar" />
      <FormPost initialValue={medicamento} onSubmit={onSubmit} />
      <Image
        src={medicamento.imagem}
        alt={medicamento.nome}
        width={200}
        height={200}
      />
    </div>
  );
}
