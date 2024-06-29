import Product from "../Product";
import { List, Container } from "./styles";
import { Restaurante } from "../../pages/Home";

export type Props = {
  restaurantes: Restaurante[];
};

const ProductList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <List className="container">
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            id={restaurante.id}
            capa={restaurante.capa}
            titulo={restaurante.titulo}
            descricao={restaurante.descricao}
            avaliacao={restaurante.avaliacao}
          />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
