import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Pratos from "../../models/Pratos";
import sushi from "../../assets/images/sushi.png";
import estrela from "../../assets/images/estrela.png";

const principal: Pratos[] = [
  {
    id: 1,
    image: sushi,
    note: 4.9,
    icon: estrela,
    title: "Hioki Shushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
  },
  {
    id: 1,
    image: sushi,
    note: 4.9,
    icon: estrela,
    title: "Hioki Shushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
  },
  {
    id: 1,
    image: sushi,
    note: 4.9,
    icon: estrela,
    title: "Hioki Shushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
  },
  {
    id: 1,
    image: sushi,
    note: 4.9,
    icon: estrela,
    title: "Hioki Shushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
  },
];

const Perfil = () => (
  <>
    <ProductList prato={principal} />
  </>
);

export default Perfil;
