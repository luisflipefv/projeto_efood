import logo from "../../assets/images/logo.svg";
import { Header } from "./styles";

const Hero = () => (
  <Header>
    <div className="container">
      <img src={logo} alt="" />
      <h1>Viva experiências gastronômicas do conforto da sua casa</h1>
    </div>
  </Header>
);

export default Hero;
