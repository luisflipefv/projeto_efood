import styled from "styled-components";
import fundo from "../../assets/images/fundo.svg";

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
