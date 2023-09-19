import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type TMedicamento = {
    id?: number | string | undefined
    nome: string
    preco: string | number
    data_de_validade: string
    estoque: boolean
    quantidade: number
    imagem: string
}

export type TMedicamentoPost = {
    nome: string
    preco: number | string
    data_de_validade: string
    estoque: boolean
    quantidade: number
    imagem: string
}