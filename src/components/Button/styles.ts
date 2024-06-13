import styled from "styled-components";
import { cores } from "../../styles";
import { Props } from ".";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div<Props>`
  color: ${cores.bege1};
  background-color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  padding: 8px;
  display: inline-block;
`;

export const LinkContainer = styled(Link)`
  color: ${cores.bege1};
  background-color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  padding: 8px;
  display: inline-block;
  text-decoration: none;
`;
