import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCss } from "./styles";
import Home from "../src/pages/Home";
import Perfil from "./pages/Perfil";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./store";
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
