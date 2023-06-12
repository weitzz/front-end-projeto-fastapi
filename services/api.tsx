import Medicamento from "@/components/Medicamento/Medicamento";
import { TMedicamento } from "@/types";

async function getData():Promise<TMedicamento[]> {
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
    const newMedicamento = await res.json()
    return newMedicamento
  } else {
    console.error('Erro ao cadastrar medicamento');
  }
}


export async function editData(medicamento: TMedicamento) {
  const res = await fetch(`http://localhost:8000/api/medicamentos/${medicamento.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medicamento)


  });
  if(res.ok){
    const updateMedicamento = res.json()
    return updateMedicamento
  } else {
    console.error('Erro ao editar medicamento');
  }
}

