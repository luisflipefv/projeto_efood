import logo from "../../assets/images/logo.svg";
import {
  Header2,
  Imagem,
  TelaRestaurants,
  Title,
  Carrinho,
  P1,
  P2,
} from "./styles";

const Hero2 = () => (
  <Header2>
    <TelaRestaurants className="container">
      <Title to="/">Restaurantes</Title>
      <img src={logo} alt="" />
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </TelaRestaurants>
    <Imagem>
      <div className="container">
        <P1>Italiana</P1>
        <P2>La Dolce Vita Trattoria</P2>
      </div>
    </Imagem>
  </Header2>
);

export default Hero2;
