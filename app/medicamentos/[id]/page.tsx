"use client"
import { getId } from "@/app/api/routes";
import Form from "@/components/Form/Form";
import { TMedicamento } from "@/types";

// export async function getId(id: string) {
//   const res = await fetch(`http://localhost:8000/api/medicamentos/${id}`, {
//     cache: 'no-store'
//   });
//   return (await res.json()) as TMedicamento;
// }

interface PageProps {
  params: { id: string, nome: string }
  searchParams: string
}
export default async function MedicamentoDetails({ params }: PageProps) {
  const medicamento = await getId(params.id)
  return (
    <div className='flex justify-center py-8 h-screen'>
      <Form id={medicamento.id} nome={medicamento?.nome} preco={medicamento?.preco} data_de_validade={medicamento.data_de_validade} imagem={medicamento.imagem} />
    </div>

  )
}

