async function getData() {
 const res = await fetch('http://localhost:8000/api/medicamentos',{ cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default getData


export async function getDataById(id:any) {
  const res = await fetch(`http://localhost:8000/api/medicamentos/${id}`);
  console.log(res)
   return res.json();
 }

