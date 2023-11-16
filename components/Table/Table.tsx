import React from "react";
import Medicamento from "../Medicamento/Medicamento";
import { getDataAll } from "@/app/api/routes";
import { TMedicamento } from "@/types";

const Table = async () => {
  const data = await getDataAll();
  return (
    <table className=" w-full h-auto mt-10 ">
      <thead className="">
        <tr>
          <th className="p-3 font-bold  text-gray-600 lg:table-cell">Nome</th>
          <th className="p-3 font-bold  text-gray-600  lg:table-cell">Preço</th>
          <th className="p-3 font-bold text-gray-600  lg:table-cell">
            Data de validade
          </th>
          <th className="p-3 font-bold text-gray-600  lg:table-cell">
            Estoque
          </th>
          <th className="p-3 font-bold text-gray-600  lg:table-cell">
            Quantidade
          </th>
          <th className="p-3 font-bold text-gray-600  lg:table-cell">Imagem</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 text-neutral-950">
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
