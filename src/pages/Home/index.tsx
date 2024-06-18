import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Pratos from "../../models/Pratos";
import sushi from "../../assets/images/sushi.png";
import estrela from "../../assets/images/estrela.png";
import massa from "../../assets/images/macarrao.png";

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
    id: 2,
    image: massa,
    note: 4.6,
    icon: estrela,
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: ["Italiana"],
  },
  {
    id: 1,
    image: sushi,
    note: 4.9,
    icon: estrela,
    title: "Hioki Shushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Japonesa"],
  },
  {
    id: 1,
    image: sushi,
    note: 4.9,
    icon: estrela,
    title: "Hioki Shushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Japonesa"],
  },
];

const Home = () => (
  <>
    <Hero />
    <ProductList prato={principal} />
  </>
);

export default Home;
