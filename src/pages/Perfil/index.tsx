import Hero2 from "../../components/Hero2";
import { useParams } from "react-router-dom";
import ProductList2 from "../../components/ProductList2";
import { useGetRestaurantSelectedQuery } from "../../services/api";

const Perfil = () => {
  const { id } = useParams();

  const { data: restaurante } = useGetRestaurantSelectedQuery(id!);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Hero2 restaurante={restaurante} />
      <ProductList2 produtos={restaurante.cardapio} />
    </>
  );
};

export default Perfil;
