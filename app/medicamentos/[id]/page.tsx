"use client"
import { TMedicamento } from "@/types";
import { useRouter } from "next/navigation";
export default function Page({ params }: { params: TMedicamento }) {
  const router = useRouter()
  const { id, nome, preco, data_de_validade, imagem } = params;


  return (
    <div>
      <h1>{nome}</h1>
      <p>ID: {id}</p>
      <p>Preço: R${preco}</p>
      <p>Data de Validade: {data_de_validade}</p>
      <img src={imagem} alt={nome} />
      <button
        type="button" onClick={() => router.push(`/`)}
        className="inline-block px-6 py-2.5 bg-sky-800 text-neutral-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out"
      >
        Voltar
      </button>
    </div>

  )
}