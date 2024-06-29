import styled from "styled-components";
import { cores } from "../../styles";
import { AddContainer } from "../Button/styles";

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.rosa};
`;

export const Title = styled.h3`
  color: ${cores.bege2};
  font-weight: bold;
  font-size: 16px;
`;

export const Image = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
`;

export const Description = styled.p`
  color: ${cores.bege2};
  font-size: 14px;
  line-height: 22px;
  margin: 8px auto;
`;

export const ModalMaster = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalCard = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 344px;
  background-color: ${cores.rosa};
  padding: 32px;
  position: relative;
  z-index: 1;

  > img {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  color: ${cores.bege1};
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ${AddContainer} {
    width: 218px;
    heigh: 24px;
    font-weight: bold;
    font-size: 14px;
    margin-top: 16px;
  }
`;
