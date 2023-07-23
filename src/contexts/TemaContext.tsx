import { ReactNode, createContext, useEffect, useState } from "react";
import { escuro, claro } from "../estilosGlobais";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface IProps {
  children: ReactNode;
}
export interface ITemaContext {
  temaAtual: string;
  temaEscolhido: typeof escuro;
  salvarTemaNoDispositivo(tema: string): Promise<void>;
}
export type TTema = typeof escuro;
export const TemaContext = createContext({});

export function TemaProvider({ children }: IProps) {
  const temas = {
    escuro: escuro,
    claro: claro,
  };
  useEffect(() => {
    const getTema = async () => {
      const temaSalvo = await AsyncStorage.getItem("@tema");
      if (temaSalvo) {
        setTemaAtual(temaSalvo);
      }
    };
    getTema();
  });
  const [temaAtual, setTemaAtual] = useState("escuro");
  async function salvarTemaNoDispositivo(tema: string) {
    AsyncStorage.setItem("@tema", tema);
    setTemaAtual(tema);
  }
  return (
    <TemaContext.Provider
      value={{
        temaAtual,
        temaEscolhido: temas[temaAtual as keyof typeof temas],
        salvarTemaNoDispositivo,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
}
