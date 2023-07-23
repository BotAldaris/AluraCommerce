import { Text, View, Image, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import {
  IProdutoContext,
  ProdutosContext,
} from "../../contexts/ProdutosContext";
import { useContext } from "react";
export interface IProduto {
  imagem: any;
  texto: string;
  preco: number;
}
interface IProps {
  item: IProduto;
  adicionar: boolean;
}
export function Produto({ item, adicionar }: IProps) {
  const { viuProduto } = useContext(ProdutosContext) as IProdutoContext;

  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem} />
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>
          {item.texto}
        </Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      {adicionar && (
        <TouchableOpacity
          style={estilos.botaoAdicionar}
          onPress={() => viuProduto(item)}
        >
          <Text style={estilos.botaoTexto}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
