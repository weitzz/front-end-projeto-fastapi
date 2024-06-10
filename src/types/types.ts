export type TMedicamento = {
  id?: number;
  nome: string;
  preco: number;
  data_de_validade: any;
  quantidade: number;
  imagem: any;
};

export type TMedicamentoPost = {
  nome: string;
  preco: number;
  data_de_validade: any;
  quantidade: number;
  imagem: any;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  nome: string;
  email: string;
  password: string;
};
