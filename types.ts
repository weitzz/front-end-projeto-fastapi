export type TMedicamento = {
    id?: number | string
    nome: string
    preco: string
    data_de_validade: string
    imagem: string
}

export type TMedicamentoPost = {
    nome: string
    preco: string
    data_de_validade: string
    imagem: string
}