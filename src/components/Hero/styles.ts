import styled from "styled-components";
import fundo from "../../assets/images/fundo.svg";
import fundoMacarrao from "../../assets/images/imagem de fundo.png";

export const Header = styled.div`
  background-image: url("${fundo}");
  height: 384px;
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
`;

export const BannerRestaurants = styled.div`
  background-image: url("${fundoMacarrao}");
  height: 280px;
  margin-top: 65px;
`;
