import Product from "../Product";
import Pratos from "../../models/Pratos";
import Sushi from "../../assets/images/sushi.png";
import Estrela from "../../assets/images/estrela.png";
import { List, Container } from "./styles";

type Props = {
  prato: Pratos[];
};

const ProductList = ({ prato }: Props) => (
  <Container>
    <List className="container">
      {prato.map((pratos) => (
        <Product
          key={pratos.id}
          image={pratos.image}
          infos={pratos.infos}
          title={pratos.title}
          description={pratos.description}
          note={pratos.note}
          icon={pratos.icon}
        />
      ))}
    </List>
  </Container>
);

export default ProductList;
