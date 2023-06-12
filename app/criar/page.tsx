
import { TMedicamento } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';
export const createUser = (req: NextApiRequest, res: NextApiResponse) => {
  const medicamento: TMedicamento = req.body;


  res.status(200).json({ message: 'Medicamentos cadastrado com sucesso' });
};
const CadastrarMedicamento = () => {
  return (

    <div><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>
  )
}

export default CadastrarMedicamento