import { IProduto } from "../../componentes/Produto";
import api from "../api";

export async function SalvarProduto(produto: IProduto) {
  try {
    const resultado = await api.post("/produtos", produto);
    return resultado.data;
  } catch (erro) {
    console.log(erro);
    return {};
  }
}
export async function PegarProdutos(): Promise<IProduto[]> {
  try {
    const resultado = await api.get("/produtos");
    return resultado.data as IProduto[];
  } catch (erro) {
    console.log(erro);
    return [] as IProduto[];
  }
}
