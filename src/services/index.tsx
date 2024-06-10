import { TMedicamento, TMedicamentoPost } from "@/src/types/types";
import { useRouter } from "next/navigation";

//http://localhost:3002/api/medicamentos
//http://localhost:3004/medicamentos
const apiBaseUrl: any = `${process.env.NEXT_API_URL}medicamentos/`;

export async function getDataAll() {
  try {
    const response = await fetch("http://localhost:8000/api/medicamentos/", {
      cache: "no-store",
      method: "GET",
    });
    if (!response.ok) {
      console.log(response.statusText);
      throw new Error(`Status: ${response.status} ops.algo deu errado.`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postData(medicamento: any) {
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
      body: medicamento,
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
