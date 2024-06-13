import { GlobalCss } from "./styles";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container"></div>
      <Hero></Hero>
    </>
  );
}

export default App;
