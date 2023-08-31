// import { getId } from "@/app/api/routes";
// import { TMedicamento } from "@/types"


// interface PageProps {
//     params: { id: string }
//     searchParams: string
// }
// // export async function generateStaticPrams() {
// //     const post  = await getDataAll()
// //     return post.map((item:TMedicamento)=> ({
// //         id: item.id,
// //         nome: item.nome
// //     }))
// // }


// export default async function PageDetails({ params, searchParams }: PageProps) {
//     const medicamento = await getId(params.id);
//     return (
//         <div>
//             {medicamento ? medicamento.map((item: TMedicamento) => {

//                 <p key={medicamento.id}>{item.nome}</p>
//             }) : 'Loading'}
//             {params.id}
//         </div>
//     )
// }