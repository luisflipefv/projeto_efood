import styled from "styled-components";
import { cores } from "../../styles";
import lixo from "../../assets/images/lixeira-de-reciclagem 1.png";
import { Link } from "react-router-dom";

type InputProps = {
  maxWidth?: string;
};

type InputGroupProps = {
  maxWidth?: string;
};

export const CartContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;

  &.is-open {
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
  overflow: auto;
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
    cursor: pointer;
  }
`;

export const CartMenu = styled.div`
  margin-bottom: 20px;
`;

export const ConfirmationMenu = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 22px;
  }
`;

export const DeliveryMenu = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  > div {
    margin-bottom: 24px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const InputGroup = styled.div<InputGroupProps>`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};

  label {
    color: #000;
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.bege2};
    color: ${cores.inputTxt};
    border: none;
    height: 32px;
    width: 100%;
    max-width: ${(props) => props.maxWidth};

    &.error {
      border: 2px solid red;
    }
  }
`;

export const Input = styled.input<InputProps>`
  background-color: ${cores.bege2};
  color: ${cores.inputTxt};
  border: none;
  height: 32px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};

  &.error {
    border: 2px solid red;
  }
`;

export const CartButton = styled.button`
  width: 100%;
  border: none;
  color: ${cores.rosa};
  background-color: ${cores.bege2};
  font-weight: bold;
  paddin: 4px;
  margin-bottom: 8px;
`;

export const PaymentMenu = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  > div {
    margin-bottom: 24px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const CartButtonLink = styled(Link)`
  max-width: 100%;
  width: 100%;
  border: none;
  color: ${cores.rosa};
  backgroundo-color: ${cores.bege2};
  font-weight: bold;
  padding: 4px;
  margin-bottom: 8px;
  text-decoration: none;
`;
