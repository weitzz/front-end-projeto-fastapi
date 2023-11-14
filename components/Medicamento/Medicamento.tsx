'use client';
import { deleteData } from '@/app/api/routes';
import { TMedicamento } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { FiEdit, FiTrash2 } from "react-icons/fi";


const Medicamento = ({ id, nome, preco, data_de_validade, estoque, quantidade, imagem }: TMedicamento) => {
  const router = useRouter()

  let novoValor = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


  const handleDelete = async (id: any) => {
    await deleteData(id)
    toast.error('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <>
      <tr key={id}>
        <td className="p-2 text-center ">{nome}</td>
        <td className="p-2 whitespace-nowrap text-center">
          <div className="text-center font-medium text-green-500">{novoValor}</div>
        </td>
        <td className="p-2 text-center">{data_de_validade}</td>
        <td className="px-6 py-4 text-center">
          <span
            className={`inline-flex items-center gap-1 rounded-full ${estoque == true ? 'bg-green-50 text-green-600' : ' text-red-600 bg-red-50'}  px-2 py-1 text-xs font-semibold`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${estoque == true ? 'bg-green-600' : 'bg-red-600'}`}></span>
            {estoque == true ? 'Ativo' : 'Desativado'}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span
            className={`inline-flex items-center gap-1 rounded-full ${quantidade >= 100 ? 'bg-green-50 text-green-600' : ' text-red-600 bg-red-50'}  px-2 py-1 text-xs font-semibold`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${quantidade >= 100 ? 'bg-green-600' : 'bg-red-600'}`}></span>
            {quantidade ? quantidade : '0'}
          </span>
        </td>
        <td className="p-2 text-center items-center">
          <Image src={imagem} alt={nome} width={60} height={60} loader={() => imagem} />
        </td>
        <td className="p-2 text-center flex justify-center">
          <button
            type="button" onClick={() => router.push(`/medicamentos/${id}`)}
            className="flex flex-row  items-center justify-center  px-6 py-2.5  bg-sky-600 text-neutral-100 font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Editar <FiEdit size={20} />
          </button>
          <button
            type="button" onClick={() => handleDelete(id)}
            className="flex flex-row  items-center justify-center px-6 py-2.5 ml-5 bg-red-600 text-neutral-100 font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Excluir <FiTrash2 size={20} />
          </button>
        </td>
      </tr>
    </>
  )
}

export default Medicamento