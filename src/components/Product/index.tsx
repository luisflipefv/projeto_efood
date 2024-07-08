import estrela from "../../assets/images/estrela.png";
import Button from "../Button";
import { Card, Conteudo, Imagem, Titulo, Div, Descricao } from "./styles";

type Props = {
  titulo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  id: number;
  // infos: string[];
};

const Product = ({ capa, titulo, descricao, avaliacao, id }: Props) => (
  <Card className="">
    <Imagem src={capa} alt="Foto do restaurante" />
    <Conteudo>
      {/* <Infos>
        {infos.map((info) => (
          <Button type="link" key={info}>
            {info}
          </Button>
        ))}
      </Infos> */}
      <Div>
        <Titulo>{titulo}</Titulo>
        <div>
          <Titulo>{avaliacao}</Titulo>
          <img src={estrela} alt="Estrela" />
        </div>
      </Div>
      <Descricao>{descricao}</Descricao>
      <Button to={`/perfil/${id}`} type={"button"}>
        Saiba mais
      </Button>
    </Conteudo>
  </Card>
);

export default Product;
