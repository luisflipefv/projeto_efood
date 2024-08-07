import styled from "styled-components";
import fundo from "../../assets/images/fundo.svg";
import { Link } from "react-router-dom";
import { breakpoints, cores } from "../../styles";

export const Header2 = styled.div`
  background-image: url("${fundo}");
  width: 100%;
  padding-top: 64px;
  img {
    display: block;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    width: 540px;
    margin: 140px auto 40px auto;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const TelaRestaurants = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: ${cores.rosa};
`;

export const Carrinho = styled.button`
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  cursor: pointer;
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  height: 280px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  margin-top: 64px;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const P1 = styled.p`
  font-weight: 100;
  font-size: 32px;
  color: ${cores.branco};
  position: absolute;
  top: 25px;
  z-index: 1;
`;

export const P2 = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: ${cores.branco};
  position: absolute;
  top: 215px;
  z-index: 1;
`;
