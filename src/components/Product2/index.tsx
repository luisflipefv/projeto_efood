import Button from "../Button";
import pizza from "../../assets/images/pizza.png";
import { Card, Description, Image, Title } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};

const Product2 = ({ image, title, description }: Props) => (
  <Card>
    <Image src={image} alt="Pizza" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type="add">Adicionar ao carrinho</Button>
  </Card>
);

export default Product2;
