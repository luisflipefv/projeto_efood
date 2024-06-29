import Hero2 from "../../components/Hero2";
import { useParams } from "react-router-dom";
import ProductList2 from "../../components/ProductList2";
import { useEffect, useState } from "react";
import { Cardapio, Restaurante } from "../Home";

const Perfil = () => {
  const { id } = useParams();

  // const { data: restaurante } = useGetRestaurantSelectedQuery(id!);

  // if (!restaurante) {
  //   return <h3>Carregando...</h3>;
  // }

  const [restaurante, setRestaurante] = useState<Restaurante>();

  const [cardapio, setCardapio] = useState<Cardapio[]>([]);
  useEffect(() => {
    let isMounted = true;
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res));
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Falha ao acarregar os dados");
        }
        return res.json();
      })
      .then((res: Restaurante) => {
        if (isMounted) {
          setCardapio(res.cardapio);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o cardápio", error);
      });
  }, [id]);

  if (!cardapio) {
    return <h3>Carregando...</h3>;
  }

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Hero2 restaurante={restaurante} />
      <ProductList2 produtos={cardapio} />
    </>
  );
};

export default Perfil;
