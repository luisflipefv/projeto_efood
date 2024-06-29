import logo from "../../assets/images/logo.svg";
import { Restaurante } from "../../pages/Home";
import {
  Header2,
  Imagem,
  TelaRestaurants,
  Title,
  Carrinho,
  P1,
  P2,
} from "./styles";

export type Props = {
  restaurante: Restaurante;
};

const Hero2 = ({ restaurante }: Props) => (
  <Header2>
    <TelaRestaurants className="container">
      <Title to="/">Restaurantes</Title>
      <img src={logo} alt="" />
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </TelaRestaurants>
    <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <P1>{restaurante.tipo}</P1>
        <P2>{restaurante.titulo}</P2>
      </div>
      <div className="overlay"></div>
    </Imagem>
  </Header2>
);

export default Hero2;
