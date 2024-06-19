import styled from "styled-components";
import { cores } from "../../styles";

export const FooterDiv = styled.div`
  padding: 40px 0;
  background-color: ${cores.bege2};
  margin-top: 120px;
`;

export const Image = styled.img``;

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0 auto;
  font-size: 10px;
  width: 480px;
`;

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`;

export const Link = styled.li`
  list-style: none;
`;
