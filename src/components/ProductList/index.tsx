import Product from "../Product";
import Product2 from "../Product2";
import Pratos from "../../models/Pratos";
import PratosProfile from "../../models/PratosProfile";
import { List, Container, ListProfile } from "./styles";

type Props = {
  prato: Pratos[];
  type: "principal" | "profile";
  pratoProfile: PratosProfile[];
};

const ProductList = ({ prato, type, pratoProfile }: Props) => {
  if (type === "principal") {
    return (
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
  }
  return (
    <Container>
      <ListProfile className="container">
        {pratoProfile.map((pratos) => (
          <Product2
            key={pratos.id}
            image={pratos.image}
            title={pratos.title}
            description={pratos.description}
          />
        ))}
      </ListProfile>
    </Container>
  );
};

export default ProductList;
