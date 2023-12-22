"use client";

import Title from "@/src/components/Title/Title";
import { editData, getId } from "@/src/services";
import { TMedicamento } from "@/src/types/types";

interface PageProps {
  params: { id: string; nome: string };
  searchParams: string;
}
export default async function MedicamentoDetails({ params }: PageProps) {
  const medicamento = await getId(params.id);
  const handleFormSubmit = (data: TMedicamento) => {
    console.log(data);
    editData(data);
  };

  return (
    <div className="grid gap-8 grid-cols-1 mb-8">
      <Title text="Editar" />
      <form action="">{/* <Input defaultValue={data.nome}/> */}</form>
    </div>
  );
}
