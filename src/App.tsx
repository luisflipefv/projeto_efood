import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCss } from "./styles";
import Home from "../src/pages/Home";
import Perfil from "./pages/Perfil";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
