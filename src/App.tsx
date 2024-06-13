import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalCss } from "./styles";
import Hero from "./components/Hero";
import Button from "./components/Button";
import ButtonSec from "./components/ButtonSec";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
]);

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <div className="container">
        <Button type="button" title="Clique aqui para saber mais">
          Saiba mais
        </Button>
        <br />
        <ButtonSec>Adicionar ao carrinho</ButtonSec>
      </div>
    </>
  );
}

export default App;
