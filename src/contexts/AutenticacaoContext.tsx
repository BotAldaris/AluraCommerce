import { ReactNode, createContext, useState } from "react";
interface IProps {
  children: ReactNode;
}
export interface ILogin {
  email: string;
  senha: number;
}
type TUsuario = {
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
};
export interface IAutenticaoContext {
  login: ({ ...IProps }) => "ok" | "Email ou senha incorretos";
  usuario: TUsuario;
}
export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }: IProps) {
  const [usuario, setUsuario] = useState<TUsuario>({} as TUsuario);
  function login({ email, senha }: ILogin) {
    if ("bot@email.com" === email && senha == 123) {
      setUsuario({
        nome: "andre",
        email,
        endereco: "Av Paulista",
        telefone: "(11) 99999-9999",
      });
      return "ok";
    } else {
      return "Email ou senha incorretos";
    }
  }
  return (
    <AutenticacaoContext.Provider value={{ login, usuario }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}
