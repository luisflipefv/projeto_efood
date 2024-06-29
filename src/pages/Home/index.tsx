import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";

export interface Cardapio {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type Restaurante = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

const Home = () => {
  // const { isLoading, error, data: restaurantes } = useGetRestaurantsQuery();

  // if (isLoading) {
  //   return <p>Carregando...</p>;
  // }
  // if (error) {
  //   return <p>Ocorreu um erro ao carregar os restaurantes</p>;
  // }
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  return (
    <>
      <Hero />
      <ProductList restaurantes={restaurantes} />
      {/* {restaurantes && <ProductList restaurantes={restaurantes} />} */}
    </>
  );
};

export default Home;
