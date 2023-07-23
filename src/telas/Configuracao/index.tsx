import { Text, View, Switch } from "react-native";
import { estilos } from "./estilos";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { TemaContext, ITemaContext } from "../../contexts/TemaContext";
interface IProps {
  navigation: NativeStackNavigationProp<any>;
}
export default function Configuracao({ navigation }: IProps) {
  const { temaAtual,temaEscolhido, salvarTemaNoDispositivo } =
    useContext(TemaContext) as ITemaContext;
  const estilo = estilos({ tema: temaEscolhido });
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
        <Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>
        <Switch
          onValueChange={() =>
            temaAtual === "escuro"
              ? salvarTemaNoDispositivo("claro")
              : salvarTemaNoDispositivo("escuro")
          }
          value={temaAtual === "escuro" ? true : false}
        />
      </View>
    </View>
  );
}
