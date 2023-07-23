import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { ProdutoProvider } from "./src/contexts/ProdutosContext";
export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutoProvider>
          <Rotas />
        </ProdutoProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}
