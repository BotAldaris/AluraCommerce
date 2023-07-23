import { ReactNode, createContext, useState } from "react";
import { produtos } from "../telas/Principal/produtos";
import { IProduto } from "../componentes/Produto";
interface IProps {
  children: ReactNode;
}
export interface ILogin {
  email: string;
  senha: number;
}
export interface IProdutoContext {
  quantidade: number;
  carrinho: IProduto[];
  ultimosVistos: IProduto[];
  viuProduto: (produto: IProduto) => void;
}
export interface IAutenticaoContext {}
export const ProdutosContext = createContext({});

export function ProdutoProvider({ children }: IProps) {
  const [quantidade, setQuantidade] = useState<number>(0);
  const [carrinho, setCarrinho] = useState<IProduto[]>([] as IProduto[]);
  const [ultimosVistos, setUltimosVistos] = useState<IProduto[]>(
    [] as IProduto[]
  );
  function viuProduto(produto: IProduto) {
    setQuantidade(quantidade + 1);
    let novoCarrinho = carrinho;
    novoCarrinho.push(produto);
    setCarrinho(novoCarrinho);
    let novoUltimosVistos = new Set(ultimosVistos);
    novoUltimosVistos.add(produto);
    setUltimosVistos([...novoUltimosVistos]);
  }
  return (
    <ProdutosContext.Provider
      value={{ quantidade, carrinho, ultimosVistos, viuProduto }}
    >
      {children}
    </ProdutosContext.Provider>
  );
}
