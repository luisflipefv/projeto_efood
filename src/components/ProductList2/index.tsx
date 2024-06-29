import { Cardapio } from "../../pages/Home";
import Product2 from "../Product2";
import { ListStyle } from "./styles";

type Props = {
  produtos: Cardapio[];
};

const ProductList2 = ({ produtos }: Props) => {
  return (
    <ListStyle>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <Product2
            id={produto.id}
            foto={produto.foto}
            nome={produto.nome}
            descricao={produto.descricao}
            porcao={produto.porcao}
            preco={produto.preco}
          />
        </li>
      ))}
    </ListStyle>
  );
};

export default ProductList2;
