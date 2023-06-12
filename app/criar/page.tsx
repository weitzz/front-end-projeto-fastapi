"use client" 
import { postData } from '@/services/api';
import { TMedicamento } from '@/types';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CadastrarMedicamento = () => {
  const router = useRouter()
  const [newMedicamento, setNewMedicamento] = useState()

  const handleSubmit :FormEventHandler<HTMLFormElement> = async (event) =>{
    event.preventDefault()
    await postData({
      nome: '',
      preco: '',
      data_de_validade: '',
      imagem: '',
      id: uuidv4()
    })
  }



  return (
    <div className='flex justify-center py-8 h-screen'>
      <form className='w-full max-w-lg' onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold">Cadastro de novo medicamento</h1>
        <div className="flex flex-wrap -mx-3 mb-6 py-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Medicamento
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Preço
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Data de validade
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" placeholder="Albuquerque" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Imagem
            </label>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
        </div>
        <div className='w-full md:w-1/2  mt-6 flex justify-between'>
        <button
          type="button" onClick={() => router.push(`/`)}
          className="inline-block px-6 py-2.5 bg-sky-800 text-neutral-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Voltar
        </button>

        <button type="submit"
          className="inline-block px-6 py-2.5 bg-green-600 text-neutral-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out">
          Salvar
        </button>
        </div>
      </form>
    </div>

  )
}

export default CadastrarMedicamento