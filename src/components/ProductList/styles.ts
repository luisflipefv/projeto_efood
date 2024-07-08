import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
  margin-top: 80px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr; 
      margin: 0 auto;
    }
  }
`;

export const ListProfile = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`;

export const ListItem = styled.li`
  list-style: none;
  height: 400px;
`;
