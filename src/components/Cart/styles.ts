import styled from "styled-components";
import { cores } from "../../styles";
import lixo from "../../assets/images/lixeira-de-reciclagem 1.png";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;

  .isOpen {
    display: flex;
  }

  .overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
  }
`;

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  z-index: 1;
  background-color: ${cores.rosa};
  padding: 32px 8px 16px 8px;
`;

export const Prices = styled.div`
  color: ${cores.bege1};
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Item = styled.div`
  width: 100%;
  background-color: ${cores.bege1};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${lixo});
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
  }
`;
