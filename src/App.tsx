import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalCss } from "./styles";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
const rotas = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <ProductList />
      </>
    ),
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
      </div>
    </>
  );
}

export default App;
