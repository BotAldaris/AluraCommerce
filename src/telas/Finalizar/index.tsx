import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { estilos } from "./estilos";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { TemaContext, ITemaContext } from "../../contexts/TemaContext";
interface IProps {
  navigation: NativeStackNavigationProp<any>;
}
export default function Finalizar({ navigation }: IProps) {
  const { temaEscolhido } = useContext(TemaContext) as ITemaContext;
  const estilo = estilos({ tema: temaEscolhido });

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
