import { TMedicamento } from "@/types";

async function getData() {
  const res = await fetch('http://localhost:8000/api/medicamentos', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default getData



export async function postData(medicamento: TMedicamento) {
  const res = await fetch('http://localhost:8000/api/medicamentos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medicamento)
  });

  if (res.ok) {
    // Sucesso ao cadastrar o medicamento
    const newMedicamento = await res.json()
    return newMedicamento
  } else {
    // Lidar com erros de resposta do servidor
    console.error('Erro ao cadastrar medicamento');
  }
}


export async function getDataById(id: any) {
  const res = await fetch(`http://localhost:8000/api/medicamentos/${id}`);
  console.log(res)
  return res.json();
}

