import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import { useRouter } from "next/navigation";

//http://localhost:3002/api/medicamentos
//http://localhost:3004/medicamentos
const apiBaseUrl: any = `${process.env.NEXT_API_URL}medicamentos/`;

// async function getData(id: number) {
//   const response = await fetch(apiBaseUrl, { cache: 'no-store' });
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   const data = await response.json(); // Converter a resposta em JSON

//   const medicamento = data.find(
//     (item: TMedicamento) => item.id === `${apiBaseUrl}${id}`,
//   );

//   return medicamento; // Retornar o medicamento encontrado
// }

// export default getData

export async function getDataAll() {
  try {
    const response = await fetch("http://localhost:8000/api/medicamentos/", {
      cache: "no-store",
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postData(medicamento: FormData) {
  try {
    const res = await fetch("http://localhost:8000/api/medicamentos/", {
      method: "POST",
      body: medicamento,
    });

    if (res.ok) {
      const newMedicamento = await res.json();
      return newMedicamento;
    } else {
      console.error("Erro ao cadastrar medicamento");
    }
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.error("Erro ao cadastrar o medicamento:", error.response.data);
      alert("Erro ao cadastrar o medicamento: " + error.response.data.message);
    } else {
      console.error("Erro ao cadastrar o medicamento:", error);
      alert("Erro ao cadastrar o medicamento. Tente novamente mais tarde.");
    }
  }
}

export async function editData(medicamento: any) {
  const res = await fetch(
    `http://localhost:8000/api/medicamentos/${medicamento.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...medicamento }),
    }
  );
  if (res.ok) {
    const updateMedicamento = await res.json();
    return updateMedicamento;
  } else {
    console.error("Erro ao editar medicamento");
  }
}

export async function getId(id: string) {
  try {
    const res = await fetch(`http://localhost:8000/api/medicamentos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Erro ao obter dados do medicamento");
    }

    return await res.json();
  } catch (error) {
    console.error("Erro na solicitação de ID:", error);
    throw error;
  }
}
export async function deleteData(id: string) {
  await fetch(`http://localhost:8000/api/medicamentos/${id}`, {
    method: "DELETE",
  });
}
