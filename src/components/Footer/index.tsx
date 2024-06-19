import logo from "../../assets/images/logo.svg";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import { FooterDiv, Image, Container, Links, Link, Text } from "./styles";

const Footer = () => (
  <FooterDiv>
    <Container className="container">
      <Image src={logo} alt="Logo do site" />
      <Links>
        <Link>
          <img src={instagram} alt="Logo Instagram" />
        </Link>
        <Link>
          <img src={twitter} alt="Logo Twitter" />
        </Link>
        <Link>
          <img src={facebook} alt="Logo Facebook" />
        </Link>
      </Links>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{" "}
      </Text>
    </Container>
  </FooterDiv>
);

export default Footer;
