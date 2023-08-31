import { TMedicamento } from '@/types';
// import { toast } from 'react-toastify';
//http://localhost:3002/api/medicamentos
//http://localhost:3004/medicamentos
const apiBaseUrl = 'http://localhost:8000/api/medicamentos/';

async function getData(id: number) {
  const response = await fetch(apiBaseUrl, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json(); // Converter a resposta em JSON

  const medicamento = data.find(
    (item: TMedicamento) => item.id === `${apiBaseUrl}${id}`,
  );

  return medicamento; // Retornar o medicamento encontrado
}

export default getData


export async function getDataAll() {
  try {
    const response = await fetch(apiBaseUrl, { cache: 'no-store', method: "GET" });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    console.error(error)
    throw error
  }

}



export async function postData(medicamento: TMedicamento) {
  const res = await fetch(apiBaseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: JSON.stringify(medicamento)
  });

  if (res.ok) {
    const newMedicamento = await res.json()
    return newMedicamento
  } else {
    console.error('Erro ao cadastrar medicamento');
  }
}


export async function editData(medicamento: TMedicamento) {
  const res = await fetch(`${apiBaseUrl}${medicamento.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...medicamento })


  });
  if (res.ok) {
    const updateMedicamento = res.json()
    return updateMedicamento
  } else {
    console.error('Erro ao editar medicamento');
  }

}


export async function getId(id: string) {
  const res = await fetch(`${apiBaseUrl}${id}`, {
    cache: 'no-store'
  });
  return (await res.json()) as TMedicamento;
}

export async function deleteData(id: string) {
  await fetch(`${apiBaseUrl}${id}`, {
    method: 'DELETE',
  });
}