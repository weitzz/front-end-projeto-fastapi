"use client"
import Medicamento from "@/components/Medicamento/Medicamento";
import { TMedicamento } from "@/types";
import { getDataAll } from "./api/routes";


// export async function getData() {
//   const res = await fetch('http://localhost:8000/api/medicamentos/', {
//     mode: 'no-cors', cache: 'no-store'
//   })
//   if (!res.ok) {
//     throw new Error('Deu ruim')
//   }
//   return res.json()
// }
// export async function getDataAll() {
//   const response = await fetch('http://localhost:8000/api/medicamentos', { mode: 'no-cors' });
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return response.json(); // Converter a resposta em JSON
// }

export default async function Home() {
  const data = await getDataAll()
  console.log(data)

  return (
    <main>
      <table className=" w-full h-auto mt-10 ">
        <thead className=" border-b-2 border-gray-100">
          <tr>
            <th className="p-3 font-bold  text-gray-600 lg:table-cell">
              Nome
            </th>
            <th className="p-3 font-bold  text-gray-600  lg:table-cell">
              Preço
            </th>
            <th className="p-3 font-bold text-gray-600  lg:table-cell">
              Data de validade
            </th>
            <th className="p-3 font-bold text-gray-600  lg:table-cell">
              Estoque
            </th>
            <th className="p-3 font-bold text-gray-600  lg:table-cell">
              Quantidade
            </th>
            <th className="p-3 font-bold text-gray-600  lg:table-cell">
              Imagem
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-neutral-950">
          {data ? data.map((item: TMedicamento) => (
            <Medicamento key={item.id}
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              data_de_validade={item.data_de_validade}
              estoque={item.estoque}
              quantidade={item.quantidade}
              imagem={item.imagem} />
          )) : null}
        </tbody>
      </table>
    </main>
  )
}
