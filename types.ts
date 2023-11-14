import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type TMedicamento = {
    id?: number | string | undefined
    nome: string
    preco: string
    data_de_validade: string
    estoque: boolean
    quantidade: string
    imagem: any
}

export type TMedicamentoPost = {
    nome: string
    preco: string
    data_de_validade: string
    estoque: boolean
    quantidade: string
    imagem: any
}