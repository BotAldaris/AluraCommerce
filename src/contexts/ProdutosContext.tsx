import { ReactNode, createContext, useEffect, useState } from "react";
import { produtos } from "../telas/Principal/produtos";
import { IProduto } from "../componentes/Produto";
import { PegarProdutos, SalvarProduto } from "../services/requisicoes/produtos";
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
  viuProduto(produto: IProduto): Promise<void>;
  precoTotal: number;
}
export interface IAutenticaoContext {}
export const ProdutosContext = createContext({});

export function ProdutoProvider({ children }: IProps) {
  const [quantidade, setQuantidade] = useState<number>(0);
  const [carrinho, setCarrinho] = useState<IProduto[]>([] as IProduto[]);
  const [ultimosVistos, setUltimosVistos] = useState<IProduto[]>(
    [] as IProduto[]
  );
  const [precoTotal, setPrecoTotal] = useState<number>(0);
  useEffect(() => {
    const pegaProdutos = async () => {
      const resultado = await PegarProdutos();
      setCarrinho(resultado);
      setQuantidade(resultado.length);
      const valor = resultado.reduce(
        (accumulator, currentValue) => accumulator + currentValue.preco,
        0
      );
      setPrecoTotal(valor);
    };
    pegaProdutos();
  }, []);
  async function viuProduto(produto: IProduto) {
    setQuantidade(quantidade + 1);
    const resultado = await SalvarProduto(produto);
    let novoCarrinho = carrinho;
    novoCarrinho.push(resultado);
    setCarrinho(novoCarrinho);
    let novoUltimosVistos = new Set(ultimosVistos);
    novoUltimosVistos.add(produto);
    setUltimosVistos([...novoUltimosVistos]);
    let novoPrecoTotal = precoTotal + produto.preco;
    setPrecoTotal(novoPrecoTotal);
  }
  return (
    <ProdutosContext.Provider
      value={{ quantidade, carrinho, ultimosVistos, viuProduto, precoTotal }}
    >
      {children}
    </ProdutosContext.Provider>
  );
}
