import React from "react";
import Medicamento from "../Medicamento/Medicamento";
import { getDataAll } from "@/src/services";
import { TMedicamento } from "@/src/types/types";

const tableList = [
  { nome: "Nome", dados: "nome" },
  { nome: "Preço", dados: "preco" },
  {
    nome: "Data de validade",
    dados: "dataValidade",
  },
  { nome: "Estoque", dados: "estoque" },
  { nome: "Quantidade", dados: "quantidade" },
  { nome: "Imagem", dados: "imagem" },
  { nome: "Ações", dados: "acoes" },
];

const Table = async () => {
  const data = await getDataAll();

  return (
    <table className=" w-full h-auto mt-8">
      <thead className="">
        <tr className="text-gray-600 font-semibold">
          {tableList.map((item) => (
            <th key={item.nome} className="text-center p-3 lg:table-cell">
              {item.nome}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 text-gray-600">
        {data
          ? data.map((item: TMedicamento) => (
              <Medicamento
                key={item.id}
                id={item.id}
                nome={item.nome}
                preco={item.preco}
                data_de_validade={item.data_de_validade}
                estoque={item.estoque}
                quantidade={item.quantidade}
                imagem={item.imagem}
              />
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Table;
