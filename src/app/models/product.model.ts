export interface Product {
  id: number;
  codigo: string;
  descricao: string;
  precoPromocional: number;
  qtdEstoque: number;
  status: boolean;
  titulo: string;
  valor: number;
  referencia: string;
  destaque: boolean;
  imgTopo: string[];
}
