import Button from "../Button";
import {} from "./styles";
import close from "../../assets/images/close.png";
import {
  ModalCard,
  Content,
  Text,
  ModalMaster,
  Card,
  Description,
  Image,
  Title,
} from "./styles";
import { useState } from "react";

type Props = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
};

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};
const Product2 = ({ foto, nome, descricao, id, porcao, preco }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const getDescription = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + "...";
    }
    return descricao;
  };

  return (
    <>
      <Card>
        <Image src={foto} alt="Foto do restaurante" />
        <Title>{nome}</Title>
        <Description>{getDescription(descricao)}</Description>
        <Button type="add" onClick={() => setIsVisible(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>
      <ModalMaster className={isVisible ? "visible" : ""}>
        <ModalCard className="container">
          <img src={close} alt="Fechar" onClick={() => setIsVisible(false)} />
          <Content>
            <img src={foto} alt={nome} />
            <Text>
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <br />
              <p>Porção: {porcao}</p>
              <Button type={"add"}>
                {`Adicionar ao carrinho - ${formataPreco(preco)}`}
              </Button>
            </Text>
          </Content>
        </ModalCard>
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      </ModalMaster>
    </>
  );
};
export default Product2;
