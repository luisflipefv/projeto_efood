import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import { useGetRestaurantsQuery } from "../../services/api";

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
  const { data: restaurantes } = useGetRestaurantsQuery();

  if (restaurantes) {
    return (
      <>
        <Hero />
        <ProductList restaurantes={restaurantes} />
      </>
    );
  }
  return <h4>Carregando...</h4>;
};

export default Home;
