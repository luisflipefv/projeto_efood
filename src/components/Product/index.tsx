import Button from "../Button";
import { Card, Conteudo, Imagem, Infos, Titulo, Div } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
  note: number;
  icon: string;
  infos: string[];
};

const Product = ({ image, title, description, note, icon, infos }: Props) => (
  <Card className="container">
    <Imagem src={image} alt={title} />
    <Conteudo>
      <Infos>
        {infos.map((info) => (
          <Button type="link" key={info}>
            {info}
          </Button>
        ))}
      </Infos>
      <Div>
        <Titulo>{title}</Titulo>
        <div>
          <Titulo>{note}</Titulo>
          <img src={icon} alt="Estrela" />
        </div>
      </Div>
      <p>{description}</p>
      <Button type={"button"}>Adicionar</Button>
    </Conteudo>
  </Card>
);

export default Product;
