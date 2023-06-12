'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export type MedicamentoProps = {
  id: number
  nome: string
  preco: string
  dataDeValidade: string
  imagem: string

}

const Medicamento = ({ id, nome, preco, dataDeValidade, imagem}: MedicamentoProps) => {
  const router = useRouter()
  return (
    <>
     <tr key={id}>
                <td className="p-2 text-center ">{nome}</td>
                <td className="p-2 text-center">{preco}</td>
                <td className="p-2 text-center">{dataDeValidade}</td>
                <td className="p-2 text-center">
                  <img src={imagem} alt={nome} />
                </td>
                <td className="p-2 text-center ">
                <button
                    type="button" onClick={() => router.push(`/medicamentos/${id}`)}
                    className="inline-block px-6 py-2.5 bg-sky-600 text-neutral-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Visualizar
                  </button>
                </td>
              </tr>
    
    
    </>

  )
}

export default Medicamento