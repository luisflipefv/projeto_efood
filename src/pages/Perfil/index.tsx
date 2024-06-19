import Hero2 from "../../components/Hero2";
import ProductList from "../../components/ProductList";
import Pratos from "../../models/Pratos";
import pizza from "../../assets/images/pizza.png";
import { Link } from "react-router-dom";
import PratosProfile from "../../models/PratosProfile";

type PratoProfile = Omit<Pratos, "infos" | "note" | "icon">;

const principal: PratoProfile[] = [
  {
    id: 1,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 2,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 3,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 4,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 5,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 6,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

const Perfil = () => (
  <>
    <Hero2 />
    <ProductList type="profile" pratoProfile={principal} prato={[]} />
  </>
);

export default Perfil;
