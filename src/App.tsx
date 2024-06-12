import { Container, GlobalCss } from "./styles";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <GlobalCss />
      <div className="App">
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
