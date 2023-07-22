import { ReactNode, createContext, useState } from "react";
import { escuro, claro } from "../estilosGlobais";
interface IProps {
  children: ReactNode;
}
export interface ITemaContext {
  temaAtual: string;
  setTemaAtual: React.Dispatch<React.SetStateAction<string>>;
  temaEscolhido: typeof escuro;
}
export type TTema = typeof escuro;
export const TemaContext = createContext({});

export function TemaProvider({ children }: IProps) {
  const temas = {
    escuro: escuro,
    claro: claro,
  };
  const [temaAtual, setTemaAtual] = useState("escuro");

  return (
    <TemaContext.Provider
      value={{
        temaAtual,
        setTemaAtual,
        temaEscolhido: temas[temaAtual as keyof typeof temas],
      }}
    >
      {children}
    </TemaContext.Provider>
  );
}
