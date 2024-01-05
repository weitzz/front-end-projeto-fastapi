"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TMedicamento } from "@/src/types/types";
import { deleteData } from "@/src/services";

const Medicamento = ({
  id,
  nome,
  preco,
  data_de_validade,
  estoque,
  quantidade,
  imagem,
}: TMedicamento) => {
  const router = useRouter();

  const handleDelete = async (id: any) => {
    // await deleteData(id);
    toast.error("Medicamento excluído !");
    router.refresh();
  };

  const originalDate = new Date(data_de_validade);

  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <>
      <tr key={id} className="">
        <td className="p-2 text-center ">{nome}</td>
        <td className="p-2 whitespace-nowrap text-center">
          <div className="text-center font-medium text-green-500">
            R${preco.toLocaleString()}
          </div>
        </td>
        <td className="p-2 text-center">{formattedDate}</td>
        <td className="px-6 py-4 text-center">
          <span
            className={`inline-flex items-center gap-1 rounded-full ${
              estoque == true
                ? "bg-green-50 text-green-600"
                : " text-red-600 bg-red-50"
            }  px-2 py-1 text-xs font-semibold`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                estoque == true ? "bg-green-600" : "bg-red-600"
              }`}
            ></span>
            {estoque == true ? "Ativo" : "Desativado"}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span
            className={`inline-flex items-center gap-1 rounded-full ${
              Number(quantidade) >= 100
                ? "bg-green-50 text-green-600"
                : " text-red-600 bg-red-50"
            }  px-2 py-1 text-xs font-semibold`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                Number(quantidade) >= 100 ? "bg-green-600" : "bg-red-600"
              }`}
            ></span>
            {quantidade ? quantidade : "0"}
          </span>
        </td>
        <td className="p-2 items-center justify-center">
          <Image
            src={imagem}
            alt={nome}
            width={60}
            height={60}
            // loader={() => imagem}
          />
        </td>
        <td className="p-2  flex justify-center items-center">
          <button
            type="button"
            onClick={() => router.push(`/medicamentos/${id}`)}
            className=" px-6 py-2.5"
          >
            <FiEdit size={20} color="blue" />
          </button>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className=" px-6 py-2.5"
          >
            <FiTrash2 size={20} color="red" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Medicamento;
