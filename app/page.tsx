import Medicamento from "@/components/Medicamento/Medicamento";
import getData from "@/services/api";
import { TMedicamento } from "@/types";
import Link from "next/link";


export default async function Home() {
  const data = await getData();

  console.log(data)
  return (
    <main className="h-screen">
        <table className=" w-full mt-10 ">
          <thead className=" border-b-2 border-gray-400">
            <tr>
              <th className="p-3 font-bold uppercase  text-gray-900  lg:table-cell">
                Nome
              </th>
              <th className="p-3 font-bold uppercase  text-gray-900  lg:table-cell">
                Preço
              </th>
              <th className="p-3 font-bold uppercase text-gray-900  lg:table-cell">
                Data de validade
              </th>
              <th className="p-3 font-bold uppercase text-gray-900  lg:table-cell">
                Imagem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-neutral-950">
             {data.map((item: TMedicamento)  =>(
            <Medicamento key={item.id}
            id={item.id}
            nome={item.nome}
            preco={item.preco}
            dataDeValidade={item.data_de_validade}
            imagem={item.imagem}/>
        ))}
          </tbody>
        </table>
    </main>
  )
}
