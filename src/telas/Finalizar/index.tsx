import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { TemaContext, ITemaContext } from "../../contexts/TemaContext";
import {
  AutenticacaoContext,
  IAutenticaoContext,
} from "../../contexts/AutenticacaoContext";
import {
  IProdutoContext,
  ProdutosContext,
} from "../../contexts/ProdutosContext";
interface IProps {
  navigation: NativeStackNavigationProp<any>;
}
export default function Finalizar({ navigation }: IProps) {
  const { temaEscolhido } = useContext(TemaContext) as ITemaContext;
  const estilo = estilos({ tema: temaEscolhido });
  const { usuario } = useContext(AutenticacaoContext) as IAutenticaoContext;
  const { quantidade, precoTotal } = useContext(
    ProdutosContext
  ) as IProdutoContext;
  console.log(precoTotal);
  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.enderecoArea}>
        <Text style={estilo.titulo}>Informações de entrega</Text>
        <Text style={estilo.texto}>Nome: {usuario.nome}</Text>
        <Text style={estilo.texto}>Endereço: {usuario.endereco}</Text>
        <Text style={estilo.texto}>Email: {usuario.email}</Text>
        <Text style={estilo.texto}>Telefone: {usuario.telefone}</Text>
      </View>
      <View style={estilo.resumoArea}>
        <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
        <Text style={estilo.texto}>Preco: {precoTotal}</Text>
      </View>
      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate("Principal")}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
