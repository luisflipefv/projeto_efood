import styled from "styled-components";
import fundo from "../../assets/images/fundo.svg";
import { breakpoints } from "../../styles";

export const Header = styled.div`
  background-image: url("${fundo}");
  background-size: cover;
  height: 384px;
  width: 100%;
  padding-top: 64px;
  margin: 0 auto;
  text-align: center;
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
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 22px;
      width: 80%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
      max-width: 768px;
      width: 100%;
    }
  }
`;
