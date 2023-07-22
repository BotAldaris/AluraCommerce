import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { estilos } from "./estilos";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { TemaContext, ITemaContext } from "../../contexts/TemaContext";
import {
  AutenticacaoContext,
  IAutenticaoContext,
} from "../../contexts/AutenticacaoContext";
interface IProps {
  navigation: NativeStackNavigationProp<any>;
}
export default function Login({ navigation }: IProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { temaEscolhido } = useContext(TemaContext) as ITemaContext;
  const estilo = estilos({ tema: temaEscolhido });
  const { login } = useContext(AutenticacaoContext) as IAutenticaoContext;
  function logandoNoSistema() {
    const resultado = login({ email, senha });
    if (resultado === "ok") {
      navigation.navigate("Principal");
    } else {
      Alert.alert(resultado);
    }
  }
  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={estilo.botao} onPress={() => logandoNoSistema()}>
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
