import logo from "../../assets/images/logo.svg";
import { Header } from "./styles";

const Hero = () => (
  <Header>
    <img src={logo} alt="" />
    <h1>Viva experiências gastronômicas do conforto da sua casa</h1>
  </Header>
);

export default Hero;
