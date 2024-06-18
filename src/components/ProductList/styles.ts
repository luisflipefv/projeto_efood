import styled from "styled-components";
import Product from "../Product";

export const Container = styled.div`
  margin-top: 80px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`;
