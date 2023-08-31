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
      <div className="flex-1 pr-4">
        <div className="relative md:w-1/3">
          <input type="search"
            className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Search..." />
          <div className="absolute top-0 left-0 inline-flex items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        </div>
      </div>
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
