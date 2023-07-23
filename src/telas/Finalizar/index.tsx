import {
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Produto } from "../../componentes/Produto";
import { estilos } from "./estilos";
import { Feather } from "react-native-vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/Feather";
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
  const { quantidade, carrinho } = useContext(
    ProdutosContext
  ) as IProdutoContext;

  return (
    <View style={estilo.container}>
      <StatusBar />
      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate("Principal")}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
