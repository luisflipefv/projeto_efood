import { Link } from "react-router-dom";
import Button from "../Button";
import {
  Card,
  Conteudo,
  Imagem,
  Infos,
  Titulo,
  Div,
  Descricao,
} from "./styles";

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
      <Descricao>{description}</Descricao>
      <Button to={"/perfil"} type={"button"}>
        Saiba mais
      </Button>
    </Conteudo>
  </Card>
);

export default Product;
