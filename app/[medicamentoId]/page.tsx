import { getDataById } from "@/services/api";

export default async function MedicamentoPage({params}: {params: any}) {

    const medicamento = await getDataById(params.id)
    console.log(medicamento)
    return (
        <><h2>{medicamento.nome}</h2></>
    )

}

