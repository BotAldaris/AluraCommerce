import {
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Produto } from "../../componentes/Produto";
import { produtos } from "./produtos";
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
export default function Principal({ navigation }: IProps) {
  const { temaEscolhido } = useContext(TemaContext) as ITemaContext;
  const estilo = estilos({ tema: temaEscolhido });
  const { usuario } = useContext(AutenticacaoContext) as IAutenticaoContext;
  const { quantidade, ultimosVistos } = useContext(
    ProdutosContext
  ) as IProdutoContext;

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá, {usuario?.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name="shopping-cart"
              size={30}
              color="#fff"
              style={estilo.carrinhoIcon}
            />
          </TouchableOpacity>
          {quantidade > 0 && (
            <View style={estilo.carrinhoQuantidadeArea}>
              <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate("Configurações")}
            style={estilo.iconArea}
          >
            <MaterialCommunityIcons
              name="settings"
              size={30}
              color="#fff"
              style={estilo.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {ultimosVistos.length > 0 && (
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={(item) => Math.random().toString()}
                  renderItem={({ item }) => (
                    <Produto item={item} adicionar={false} />
                  )}
                  style={estilo.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
            <Text style={[estilo.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        )}
      />
    </View>
  );
}
