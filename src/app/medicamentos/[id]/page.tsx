"use client";

import FormPost from "@/src/components/FormPost/FormPost";
import Title from "@/src/components/Title/Title";
import { editData, getId } from "@/src/services";
import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import { useForm } from "react-hook-form";

interface PageProps {
  params: { id: string; nome: string };
  searchParams: string;
}

export default async function MedicamentoDetails({ params }: PageProps) {
  const methods = useForm<TMedicamento | any>({
    defaultValues: {},
    mode: "all",
  });
  const medicamento = await getId(params.id);

  const onSubmit = methods.handleSubmit(async (data: TMedicamento) => {
    editData(data);
  });

  return (
    <div className="grid gap-8 grid-cols-1 mb-8">
      <Title text="Editar" />
      <FormPost
        submit={() => onSubmit()}
        edit={true}
        initialValue={medicamento}
      />
    </div>
  );
}
