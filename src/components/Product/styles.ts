import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const Imagem = styled.img`
  width: 100%;
  display: block;
`;

export const Card = styled.div`
  max-width: 470px;
  width: 100%;
  background-color: ${cores.branco};
  margin-bottom: 80px;
  position: relative;
  }
`;

export const Conteudo = styled.div`
  padding: 8px;
  border: 1px solid ${cores.rosa};

  ${ButtonContainer} {
    margin-top: 16px;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    img {
      margin-left: 8px;
    }
  }
`;

export const Titulo = styled.h3`
  display: flex;
`;

export const Descricao = styled.p``;

export const Infos = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  ${ButtonContainer} {
    margin-right: 16px;
  }
`;
