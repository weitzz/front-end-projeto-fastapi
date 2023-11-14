"use client";
import { getId } from "@/app/api/routes";
import Form from "@/components/Form/Form";
import Title from "@/components/Title/Title";
import { TMedicamento } from "@/types";

interface PageProps {
  params: { id: string; nome: string };
  searchParams: string;
}
export default async function MedicamentoDetails({ params }: PageProps) {
  const medicamento = await getId(params.id);

  const handleFormSubmit = (data: TMedicamento) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center py-8 h-screen">
      <Title text="Editar" />
      <Form defaultValues={medicamento} onSubmit={handleFormSubmit} />
    </div>
  );
}
