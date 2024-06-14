import Product from "../Product";
import { List, Container } from "./styles";
import Sushi from "../../assets/images/sushi.png";
import Estrela from "../../assets/images/estrela.png";

const ProductList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          image={Sushi}
          infos={["Destaque da Semana", "Japonesa"]}
          title={"Hioki Sushi "}
          description={
            "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          }
          note={4.9}
          icon={Estrela}
        />
        <Product
          image={Sushi}
          infos={["Japonesa"]}
          title={"Hioki Sushi "}
          description={
            "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          }
          note={4.9}
          icon={Estrela}
        />
      </List>
    </div>
  </Container>
);

export default ProductList;
