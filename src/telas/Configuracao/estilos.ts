import { StyleSheet } from "react-native";
import { TTema } from "../../contexts/TemaContext";
interface IProp {
  tema: TTema;
}
export const estilos = ({ tema }: IProp) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      alignItems: "center",
      justifyContent: "center",
    },
    titulo: {
      fontSize: 25,
      fontWeight: "bold",
      color: tema.texto,
      marginBottom: 20,
    },
    subtitulo: {
      fontSize: 18,
      fontWeight: "400",
      color: tema.texto,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
